import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { CardComponentBean, ChartBean, BarChartBean, LineChartBean, PieChartBean, DoughnutChartBean } from '../card-component.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() chartBean: ChartBean;
  barChartFlag = false;
  lineChartFlag = false;
  pieChartFlag = false;
  doughnutChartFlag = false;

  public set lineChartBean(lineChartBean: LineChartBean) {
    if (lineChartBean != null) {
      this.lineChartFlag = true;
    }
    this.lineChartBean = lineChartBean;
  }
  public get lineChartBean(): LineChartBean {
    return this.lineChartBean;
  }
  public set barChartBean(barChartBean: BarChartBean) {
    if (barChartBean != null) {
      this.barChartFlag = true;
    }
    this.barChartBean = barChartBean;
  }
  public get barChartBean(): BarChartBean {
    return this.barChartBean;
  }
  public set pieChartBean(pieChartBean: PieChartBean) {
    if (pieChartBean != null) {
      this.pieChartFlag = true;
    }
    this.pieChartBean = pieChartBean;
  }
  public get pieChartBean(): PieChartBean {
    return this.pieChartBean;
  }
  public set doughnutChartBean(doughnutChartBean: DoughnutChartBean) {
    if (doughnutChartBean != null) {
      this.doughnutChartFlag = true;
    }
    this.doughnutChartBean = doughnutChartBean;
  }
  public get doughnutChartBean(): DoughnutChartBean {
    return this.doughnutChartBean;
  }
  // barChartBean: BarChartBean = null;
  // lineChartFlag = false;
  // lineChartBean: LineChartBean = null;
  // pieChartFlag = false;
  // pieChartBean: PieChartBean = null;
  // doughnutChartFlag = false;
  // doughnutChartBean: DoughnutChartBean = null;

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  constructor() { }

  ngOnInit() {
    switch (this.chartBean.chartType) {
      case 'BarChart':
        this.barChartBean = <BarChartBean>this.chartBean;
        this.barChartFlag = true;
        break;
      case 'LineChart':
      this.lineChartBean = <LineChartBean>this.chartBean;
      this.lineChartFlag = true;
        break;
      case 'PieChart':
      this.pieChartBean = <PieChartBean>this.chartBean;
      this.pieChartFlag = true;
        break;
      case 'DoughnutChart':
      this.doughnutChartBean = <DoughnutChartBean>this.chartBean;
      this.doughnutChartFlag = true;
        break;

      default:
        break;
    }
  }

  ngOnChanges() {
  }

}
