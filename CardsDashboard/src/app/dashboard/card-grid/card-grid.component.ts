import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import { CardBean } from './card/card.model';
import * as Muuri from 'muuri';


import { CardConfigurationBean } from './card/card-configuration.model';
import { CardComponentBean, LineChartBean, BarChartBean, PieChartBean, DoughnutChartBean } from './card/card-component.model';
import { ActivatedRoute } from '@angular/router';
import { DashboardBean } from '../dashboard.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit, AfterViewInit {

  private cardConfiguration: CardConfigurationBean;
  private cardComponentBean: CardComponentBean;
  @Input() dashboardBean: DashboardBean;
  public cards: CardBean[] = [];

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.activatedRoute.params.subscribe(console.log);
    });
    this.cards = [
      { gridID: 'grid101',
        cardID: 'card1',
        cardComponentBean: {
          chartType: 'LineChart',
          type: 'chart'
        }
      },
      {
        gridID: 'grid101',
        cardID: 'card2',
        cardComponentBean: {
          chartType: 'BarChart',
          type: 'chart'
        }
      },
      {
        gridID: 'grid101',
        cardID: 'card3',
        cardComponentBean: {
          chartType: 'PieChart',
          type: 'chart'
        }
      },
      {
        gridID: 'grid101',
        cardID: 'card4',
        cardComponentBean: {
          chartType: 'DoughnutChart',
          type: 'chart'
        }
      },
      {
        gridID: 'grid101',
        cardID: 'card3',
        cardComponentBean: {
          type: 'table'
        }
      },
      {
        gridID: 'grid101',
        cardID: 'card1',
        cardComponentBean: {
          type: 'notification'
        }
      },
      {
        gridID: 'grid101',
        cardID: 'card3',
        cardComponentBean: {
          type: 'map'
        }
      }
    ];

    alert("init"+this.dashboardBean);
  }

  ngAfterViewInit() {
    alert('after'+this.dashboardBean);
    const grid = new Muuri('.grid', {
      dragEnabled: true,
      fillGaps: true,
      layoutOnResize: true
    });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes.dashboardBean);
  // }
}
