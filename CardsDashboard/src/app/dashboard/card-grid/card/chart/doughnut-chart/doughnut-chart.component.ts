import { Component, OnInit, Input } from '@angular/core';
import { DoughnutChartBean } from '../../card-component.model';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  doughnutChartBean: DoughnutChartBean = {
    type: 'chart',
    animations: true,
    chartID: '1214',
    componentID: '2122',
    gradient: false,
    chartType: 'DoughnutChart',
    legend: true,
    legendPosition: 'right',
    legendTitle: 'Legend',
    arcWidth: 0.25,
    doughnut: true,
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
   

    colorScheme;
  constructor() { }

  ngOnInit() {
    this.colorScheme = {
      domain: [
      '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
        ]
      };

    // const doughnutChartBean: DoughnutChartBean = {
    //   type: 'chart',
    //   animations: true,
    //   chartID: '1214',
    //   componentID: '2122',
    //   gradient: false,
    //   chartType: 'DoughnutChart',
    //   legend: true,
    //   legendPosition: 'right',
    //   legendTitle: 'Legend',
    //   arcWidth: 0.25,
    //   doughnut: true,
    //   labels: true,
    //   explodeSlices: false,
    //     results: [{
    //       'key': 'IBM',
    //       'value': '150.1M'
    //     },
    //     {
    //       'key': 'INGRAM-MICRO',
    //       'value': '202.1M'
    //     },
    //     {
    //       'key': 'DIMENSION DATA',
    //       'value': '220M'
    //     },
    //     {
    //       'key': 'AZLAN',
    //       'value': '225M'
    //     },
    //     {
    //       'key': 'AVNET-XML',
    //       'value': '260M'
    //     }]
    //   };

    // this.cards = [
    //   {
    //     cardID: 'card1',
    //     cardComponentBean: lineChartBean
    //   },
    //   {
    //     cardID: 'card2',
    //     cardComponentBean: barChartBean
    //   },
    //   {
    //     cardID: 'card3',
    //     cardComponentBean: doughnutChartBean
    //   },
    //   {
    //     cardID: 'card4',
    //     cardComponentBean: pieChartBean
    //   },
    //   {
    //     cardID: 'card3',
    //     cardComponentBean: {
    //       type: 'table'
    //     }
    //   },
    //   {
    //     cardID: 'card1',
    //     cardComponentBean: {
    //       type: 'notification'
    //     }
    //   },
    //   {
    //     cardID: 'card3',
    //     cardComponentBean: {
    //       type: 'map'
    //     }
    //   }
    // ];
  }

}
