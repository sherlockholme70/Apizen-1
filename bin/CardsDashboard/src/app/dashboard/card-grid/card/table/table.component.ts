import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  table: Table;

  constructor() {
  }

  ngOnInit() {
    this.table = {
      TableHeaderRow: ['Company', 'Contact', 'Country'],
      TableDataRow: [
        ['Alfreds Futterkiste', 'Maria Anders', 'Germany'],
        ['Centro comercial Moctezuma', 'Francisco Chang', 'Mexico'],
        ['Ernst Handel', 'Roland Mendel', 'Austria']
      ]
    }
  }
}



