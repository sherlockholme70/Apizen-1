import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AddCardDialogComponent } from 'src/app/dashboard/card-grid/add-card-dialog/add-card-dialog.component';
import { DashboardBean } from './dashboard.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardBean: DashboardBean;
  constructor(private matDialog: MatDialog, private dashboardService: DashboardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('Value =', this.activatedRoute.params);
    this.dashboardBean = {
      dashboardID: null,
      username: 'mujakhan',
      createDate: new Date(),
      updateDate: new Date(),
      cards: [
        {
          dashboardID: 'dashboard101',
          cardID: 'card1',
          cardComponentBean: {
            chartType: 'LineChart',
            type: 'chart'
          }
        },
        {
          dashboardID: 'dashboard101',
          cardID: 'card2',
          cardComponentBean: {
            chartType: 'BarChart',
            type: 'chart'
          }
        },
        {
          dashboardID: 'dashboard101',
          cardID: 'card3',
          cardComponentBean: {
            chartType: 'PieChart',
            type: 'chart'
          }
        },
        {
          dashboardID: 'dashboard101',
          cardID: 'card4',
          cardComponentBean: {
            chartType: 'DoughnutChart',
            type: 'chart'
          }
        },
        {
          dashboardID: 'dashboard101',
          cardID: 'card3',
          cardComponentBean: {
            type: 'table'
          }
        },
        {
          dashboardID: 'dashboard101',
          cardID: 'card1',
          cardComponentBean: {
            type: 'notification'
          }
        },
        {
          dashboardID: 'dashboard101',
          cardID: 'card3',
          cardComponentBean: {
            type: 'map'
          }
        }
      ]
    }
  };
  // this.activatedRoute.params
  // .subscribe(params => this.dashboardService.getDashboardData(params['dashboardID'])
  //   .subscribe(data => this.dashboardBean = data)
  // );


  addCardDialog(): void {
    const dialogRef: MatDialogRef<AddCardDialogComponent> = this.matDialog.open(AddCardDialogComponent);
  }

}
