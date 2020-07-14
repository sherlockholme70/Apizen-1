import { Component, OnInit, Input } from '@angular/core';
import { CardBean } from './card.model';
import { CardComponentBean, ChartBean } from './card-component.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardBean: CardBean;
  cardMap: boolean;
  cardTable: boolean;
  cardChart: boolean;
  cardNotification: boolean;
  chartBean: ChartBean;
  barChartFlag = false;
  lineChartFlag = false;
  pieChartFlag = false;
  doughnutChartFlag = false;

  constructor() {
  }

  ngOnInit() {

    switch (this.cardBean.cardComponentBean.type) {
      case 'map':
        this.cardMap = true;
        break;

      case 'table':
        this.cardTable = true;
        break;

      case 'chart':
        switch (this.cardBean.cardComponentBean.chartType) {
          case 'BarChart':

            this.barChartFlag = true;
            break;
          case 'LineChart':

            this.lineChartFlag = true;
            break;
          case 'PieChart':

            this.pieChartFlag = true;
            break;
          case 'DoughnutChart':

            this.doughnutChartFlag = true;
            break;
        }
        // this.chartBean = <ChartBean>this.card.cardComponentBean;
        // console.log(<ChartBean>this.card.cardComponentBean);
        this.cardChart = true;
        break;

      case 'notification':
        this.cardNotification = true;
        break;

      default:
        console.log('no such view');
        break;
    }
  }

}
