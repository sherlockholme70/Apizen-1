import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardGridService } from '../card-grid.service';
import { CardSharingService } from '../card-sharing.service';
import { AddCardDialogComponent } from '../dashboard/card-grid/add-card-dialog/add-card-dialog.component';
import { DashboardBean } from '../dashboard/dashboard.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {


  over: true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  createDashboarDialog() {
    const dialogRef = this.dialog.open(CreateDashboardDialogComponent);
  }
}

@Component({
  selector: 'create-dashboard',
  templateUrl: './create-dashboard.component.html',
})
export class CreateDashboardDialogComponent implements OnInit {

  dashboardForm: FormGroup;
  isLinear = false;
  cardSource = null;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateDashboardDialogComponent>, public dialog: MatDialog, private cardGridService: CardGridService, private router: Router, private activatedRoute: ActivatedRoute, private cardSharingService: CardSharingService) {
  }

  ngOnInit() {
    this.dashboardForm = this.formBuilder.group({
      dashboardName: ['', Validators.required],
      userName: ['', Validators.required],
    });
    this.dashboardForm.valueChanges.subscribe(console.log);
  }

  closeAddDashboardDialog() {
    this.dialogRef.close();
  }

  openCardDesigner() {
    if (this.dashboardForm.valid) {
      console.log('Cusror is here')
      this.closeAddDashboardDialog();
      const dashboardBean: DashboardBean = this.saveGridAndDashboardDetails(new DashboardBean());
      this.cardSharingService.updateDashboardData(dashboardBean);
      const dialogRef = this.dialog.open(AddCardDialogComponent);
    }
  }

  saveGridAndDashboardDetails(dashboardBean: DashboardBean): DashboardBean {
    const dashboardName = this.dashboardForm.value.dashboardName;
    const userName = this.dashboardForm.value.userName;

    dashboardBean = {
      dashboardID: null,
      dashboardName: dashboardName,
      username: userName,
      createDate: new Date(),
      updateDate: new Date(),
      cards: null
    };

    this.cardGridService.saveDashboard(dashboardBean).subscribe(data => {
      console.log(data.dashboardName)
    }, error => alert('error inserting Dashboard Data' + error));



    return dashboardBean;
  }

}
