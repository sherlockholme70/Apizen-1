import { Component, OnInit, Input } from '@angular/core';
import { PieChartBean } from '../../card-component.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

   pieChartBean: PieChartBean = {
    type: 'chart',
    animations: true,
    chartID: '1214',
    componentID: '2123',
    gradient: false,
    chartType: 'PieChart',
    legend: true,
    legendPosition: 'right',
    legendTitle: 'Legend',
  labels: true,
  explodeSlices: false,
  results: [{
    "name": "IBM",
    "value": 150
  },
  {
    "name": "INGRAM-MICRO",
    "value": 202
  },
  {
    "name": "DIMENSION DATA",
    "value": 220
  },
  {
    "name": "AZLAN",
    "value": 225
  },
  {
    "name": "AVNET-XML",
    "value": 260
  }]
};

    // results: [{
    //   'key': 'IBM',
    //   'value': 150
    // },
    // {
    //   'key': 'INGRAM-MICRO',
    //   'value': 202
    // },
    // {
    //   'key': 'DIMENSION DATA',
    //   'value': 220
    // },
    // {
    //   'key': 'AZLAN',
    //   'value': 225
    // },
    // {
    //   'key': 'AVNET-XML',
    //   'value': 260
    // }]
  

  colorScheme = {
    domain: [
    '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
      ]
    };
  constructor() { }

  ngOnInit() {

    console.log(this.pieChartBean);
    // this.pieChartBean = {
    //   type: 'chart',
    //   animations: true,
    //   chartID: '1214',
    //   componentID: '2123',
    //   gradient: false,
    //   chartType: 'PieChart',
    //   legend: true,
    //   legendPosition: 'right',
    //   legendTitle: 'Legend',
    // labels: true,
    // explodeSlices: false,
    //   results: [{
    //     'key': 'IBM',
    //     'value': '150.1M'
    //   },
    //   {
    //     'key': 'INGRAM-MICRO',
    //     'value': '202.1M'
    //   },
    //   {
    //     'key': 'DIMENSION DATA',
    //     'value': '220M'
    //   },
    //   {
    //     'key': 'AZLAN',
    //     'value': '225M'
    //   },
    //   {
    //     'key': 'AVNET-XML',
    //     'value': '260M'
    //   }]
    // };
  }

}
