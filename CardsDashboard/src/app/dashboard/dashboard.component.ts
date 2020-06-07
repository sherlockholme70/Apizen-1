import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddCardDialogComponent } from 'src/app/dashboard/card-grid/add-card-dialog/add-card-dialog.component';
import { DashboardService } from './dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { DashboardBean } from './dashboard.model';
import { GridBean } from './card-grid/card-grid.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardBean: DashboardBean;
  constructor(private matDialog: MatDialog, private dashboardService: DashboardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dashboardBean = {
      dashboardID: null,
      gridBean: {
        gridID: null,
        cards: [
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
        ]
      }
    };
    // this.activatedRoute.params
    // .subscribe(params => this.dashboardService.getDashboardData(params['dashboardID'])
    //   .subscribe(data => this.dashboardBean = data)
    // );
  }

  addCardDialog(): void {
    const dialogRef: MatDialogRef<AddCardDialogComponent> = this.matDialog.open(AddCardDialogComponent);
  }

}
