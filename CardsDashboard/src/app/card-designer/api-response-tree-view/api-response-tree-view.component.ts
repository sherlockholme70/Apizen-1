import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import { Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import { CardSharingService } from 'src/app/card-sharing.service';
import { TreeGeneratorService } from './tree-generator.service';
import { TreeFlatNode, TreeNode } from './tree-node.model';


@Component({
  selector: 'app-api-response-tree-view',
  templateUrl: './api-response-tree-view.component.html',
  styleUrls: ['./api-response-tree-view.component.scss'],
  providers: [TreeGeneratorService]
})
export class ApiResponseTreeViewComponent implements OnInit, AfterViewInit {

  @Output() jsonPath = new EventEmitter<String>();

  @Input() apiResponse: String;
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TreeFlatNode, TreeNode>();

  xpath: String;
  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TreeNode, TreeFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TreeFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TreeFlatNode>;

  treeFlattener: MatTreeFlattener<TreeNode, TreeFlatNode>;

  dataSource: MatTreeFlatDataSource<TreeNode, TreeFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TreeFlatNode>(true);

  constructor(private treeGeneratorService: TreeGeneratorService) { }

  ngOnInit() {
    console.log(this.apiResponse);
    this.treeGeneratorService.initialize(this.apiResponse);
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TreeFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.treeGeneratorService.nodeChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() { }

  getLevel = (node: TreeFlatNode) => node.level;

  isExpandable = (node: TreeFlatNode) => node.expandable;

  getChildren = (node: TreeNode): TreeNode[] => node.value;

  hasChild = (_: number, _nodeData: TreeFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TreeFlatNode) => _nodeData.value === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TreeNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.value === node.key
        ? existingNode
        : new TreeFlatNode();
    flatNode.value = node.key;
    flatNode.level = level;
    flatNode.expandable = !!node.value;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TreeFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TreeFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TreeFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }


  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TreeFlatNode): void {
    let parent: TreeFlatNode | null = this.getParentNode(node);
    console.log(node);
    let jsonPath: String = '';
    if (node.value.includes(':')) {
      jsonPath = node.value.substring(0, node.value.indexOf(':'));
    } else if (isNaN(parseInt(node.value, 10))) {
      jsonPath = node.value;
    } else {
      jsonPath = '[' + node.value + ']';
    }
    
    while (parent) {
      console.log(parent.value);
      if (parent.value != null) {
        if (isNaN(parseInt(parent.value, 10))) {
          if (jsonPath.startsWith('[')) {
            jsonPath = parent.value + jsonPath;
          } else {
            jsonPath = parent.value + '.'  + jsonPath;
          }
        } else {
          jsonPath = '[' + parent.value + ']' + '.' + jsonPath;
        }
      }
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
    
    this.jsonPath.emit(jsonPath);
    console.log(jsonPath);
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TreeFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TreeFlatNode): TreeFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}



