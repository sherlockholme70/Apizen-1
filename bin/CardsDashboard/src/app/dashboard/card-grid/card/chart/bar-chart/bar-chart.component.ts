import { Component, OnInit, Input } from '@angular/core';
import { BarChartBean, DoughnutChartBean } from '../../card-component.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  barChartBean: BarChartBean = {
    type: 'chart',
    animations: true,
    chartID: '1213',
    componentID: '2122',
    gradient: false,
    chartType: 'BarChart',
    legend: true,
    legendPosition: 'right',
    legendTitle: 'Legend',
    xAxis: true,
    yAxis: true,
    showGridLines: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: 'Year',
    yAxisLabel: 'Revenue',
    results: [{
      "name": "2015",
      "value": 150
    },
    {
      "name": "2016",
      "value": 202
    },
    {
      "name": "2017",
      "value": 220
    },
    {
      "name": "2018",
      "value": 225
    }, {
      "name": "2019",
      "value": 260
    }]
 };
    // results: [{
    //   'key': '2015',
    //   'value': 150
    // },
    // {
    //   'key': '2016',
    //   'value': 202
    // },
    // {
    //   'key': '2017',
    //   'value': 220
    // },
    // {
    //   'key': '2018',
    //   'value': 225
    // }, {
    //   'key': '2019',
    //   'value': 260
    // }]
  
  colorScheme = {
    domain: [
    '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
      ]
    };
  constructor() { }

  ngOnInit() {
  //   this.barChartBean = {
  //     type: 'chart',
  //     animations: true,
  //     chartID: '1213',
  //     componentID: '2122',
  //     gradient: false,
  //     chartType: 'BarChart',
  //     legend: true,
  //     legendPosition: 'right',
  //     legendTitle: 'Legend',
  //     xAxis: true,
  //     yAxis: true,
  //     showGridLines: true,
  //     showXAxisLabel: true,
  //     showYAxisLabel: true,
  //     xAxisLabel: 'Year',
  //     yAxisLabel: 'Revenue',
  //     showDataLabel: true,
  //     results: [{
  //       'key': '2015',
  //       'value': '150.1M'
  //     },
  //     {
  //       'key': '2016',
  //       'value': '202.1M'
  //     },
  //     {
  //       'key': '2017',
  //       'value': '220M'
  //     },
  //     {
  //       'key': '2018',
  //       'value': '225M'
  //     }, {
  //       'key': '2019',
  //       'value': '260M'
  //     }]
  //   };


    // this.colorScheme = {
    //   domain: [
    //     '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
    //   ]
    // };
  }


}
