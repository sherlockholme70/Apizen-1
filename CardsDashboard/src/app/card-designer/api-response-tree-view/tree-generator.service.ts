import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TreeNode } from './tree-node.model';

@Injectable({
  providedIn: 'root'
})
export class TreeGeneratorService {

  nodeChange = new BehaviorSubject<TreeNode[]>([]);
  getNode(): TreeNode[] {
    return this.nodeChange.value;
  }
  constructor() {
    this.initialize([]);
  }

  initialize(jsonData: any) {
    const data = this.buildTree(jsonData, 0);
    this.nodeChange.next(data);
  }

  buildTree(jsonObject: {[key: string]: any}, level: number): TreeNode[] {
    return Object.keys(jsonObject).reduce<TreeNode[]>((accumulator, key) => {
      const value = jsonObject[key];
      const node = new TreeNode();
      node.key = key;
      if (value != null) {
        if (typeof value === 'object') {
          node.value = this.buildTree(value, level + 1);
        } else {
          node.key =  key + ' : ' + value;
        }
      }
      return accumulator.concat(node);
    }, []);
  }
}
