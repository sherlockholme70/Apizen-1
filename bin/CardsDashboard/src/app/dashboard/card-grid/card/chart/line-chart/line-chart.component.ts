import { Component, OnInit, Input } from '@angular/core';
import { LineChartBean, ChartBean } from '../../card-component.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  lineChartBean: LineChartBean;
  colorScheme = {
    domain: [
    '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
      ]
    };
  constructor() { }

  ngOnInit() {

   this.lineChartBean = {
      type: 'chart',
      animations: true,
      chartID: '1213',
      componentID: '2122',
      gradient: false,
      legend: true,
      legendPosition: 'right',
      legendTitle: 'Legend',
      xAxis: true,
      yAxis: true,
      chartType: 'LineChart',
      showXAxisLabel: true,
      showYAxisLabel: true,
      xAxisLabel: 'Company',
      yAxisLabel: 'Sales (in millions)',
      showDataLabel: true,
      autoscale: true,
      results: [
    { 
      "name": "Zensar",
      "series": [{
        "name": "2010",
        "value": 150
      }, {
        "name": "2011",
        "value": 200
      }, {
        "name": "2012",
        "value": 220
      }, {
        "name": "2013",
        "value": 210
      }],
    }, {
      "name": "CEAT",
      "series": [{
        "name": "2010",
        "value": 85
      }, {
        "name": "2011",
        "value": 92
      }, {
        "name": "2012",
        "value": 103
      }, {
        "name": "2013",
        "value": 98
      }],

    }, {
      "name": "KEC",
      "series": [{
        "name": "2010",
        "value": 45
      }, {
        "name": "2011",
        "value": 57
      }, {
        "name": "2012",
        "value": 52
      }, {
        "name": "2013",
        "value": 64
      }],

    }, {
      "name": "SAE Towers",
      "series": [{
        "name": "2010",
        "value": 20
      }, {
        "name": "2011",
        "value": 22
      }, {
        "name": "2012",
        "value": 35
      }, {
        "name": "2013",
        "value": 29
      }]
    }
  ]
      // results: [{
      //   'key': 'Zensar',
      //   'values': [{
      //     'key': '2010',
      //     'value': 150
      //   }, {
      //     'key': '2011',
      //     'value': 200
      //   }, {
      //     'key': '2012',
      //     'value': 220
      //   }, {
      //     'key': '2013',
      //     'value': 210
      //   }],
      // }, {
      //   'key': 'CEAT',
      //   'values': [{
      //     'key': '2010',
      //     'value': 85
      //   }, {
      //     'key': '2011',
      //     'value': 92
      //   }, {
      //     'key': '2012',
      //     'value': 103
      //   }, {
      //     'key': '2013',
      //     'value': 98
      //   }],
  
      // }, {
      //   'key': 'KEC',
      //   'values': [{
      //     'key': '2010',
      //     'value': 45
      //   }, {
      //     'key': '2011',
      //     'value': 57
      //   }, {
      //     'key': '2012',
      //     'value': 52
      //   }, {
      //     'key': '2013',
      //     'value': 64
      //   }],
  
      // }, {
      //   'key': 'SAE Towers',
      //   'values': [{
      //     'key': '2010',
      //     'value': 20
      //   }, {
      //     'key': '2011',
      //     'value': 22
      //   }, {
      //     'key': '2012',
      //     'value': 35
      //   }, {
      //     'key': '2013',
      //     'value': 29
      //   }],
  
      // },
      // ]
    };
  
    // this.lineChartBean = {
    //   type: 'chart',
    //   animations: true,
    //   chartID: '1213',
    //   componentID: '2122',
    //   gradient: false,
    //   legend: true,
    //   legendPosition: 'right',
    //   legendTitle: 'Legend',
    //   xAxis: true,
    //   yAxis: true,
    //   chartType: 'LineChart',
    //   showGridLines: true,
    //   showXAxisLabel: true,
    //   showYAxisLabel: true,
    //   xAxisLabel: 'Company',
    //   yAxisLabel: 'Sales (in millions)',
    //   showDataLabel: true,
    //   autoscale: true,
    //   results: [{
    //     'key': 'Zensar',
    //     ''value's': [{
    //       'key': '2010',
    //       'value': '150'
    //     }, {
    //       'key': '2011',
    //       'value': '200'
    //     }, {
    //       'key': '2012',
    //       'value': '220'
    //     }, {
    //       'key': '2013',
    //       'value': '210'
    //     }],

    //   }, {
    //     'key': 'CEAT',
    //     ''value's': [{
    //       'key': '2010',
    //       'value': '85'
    //     }, {
    //       'key': '2011',
    //       'value': '92'
    //     }, {
    //       'key': '2012',
    //       'value': '103'
    //     }, {
    //       'key': '2013',
    //       'value': '98'
    //     }],

    //   }, {
    //     'key': 'KEC',
    //     ''value's': [{
    //       'key': '2010',
    //       'value': '45'
    //     }, {
    //       'key': '2011',
    //       'value': '57'
    //     }, {
    //       'key': '2012',
    //       'value': '52'
    //     }, {
    //       'key': '2013',
    //       'value': '64'
    //     }],

    //   }, {
    //     'key': 'SAE Towers',
    //     ''value's': [{
    //       'key': '2010',
    //       'value': '20'
    //     }, {
    //       'key': '2011',
    //       'value': '22'
    //     }, {
    //       'key': '2012',
    //       'value': '35'
    //     }, {
    //       'key': '2013',
    //       'value': '29'
    //     }],

    //   },
    //   ]
    // };

  }

}
