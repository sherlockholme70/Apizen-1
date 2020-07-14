import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiResponseTreeViewComponent } from './card-designer/api-response-tree-view/api-response-tree-view.component';
import { CardComponent } from '././dashboard/card-grid/card/card.component';
import { ChartComponent } from './dashboard/card-grid/card/chart/chart.component';
import { MapComponent } from './dashboard/card-grid/card/map/map.component';
import { NotificationComponent } from './dashboard/card-grid/card/notification/notification.component';
import { TableComponent } from './dashboard/card-grid/card/table/table.component';
import { MaterialModule} from './material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AddCardDialogComponent} from './dashboard/card-grid/add-card-dialog/add-card-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from 'src/app/navigation-bar/navigation-bar.component';
import { CardSharingService } from './card-sharing.service';
import { APIResponseProviderService } from './dashboard/card-grid/add-card-dialog/apiresponse-provider.service';
import { SidebarComponent, CreateDashboardDialogComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './dashboard/card-grid/card/chart/line-chart/line-chart.component';
import { BarChartComponent } from './dashboard/card-grid/card/chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './dashboard/card-grid/card/chart/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './dashboard/card-grid/card/chart/doughnut-chart/doughnut-chart.component';
import { CardDesignerService } from './card-designer/card-designer.service';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardGridComponent } from './dashboard/card-grid/card-grid.component';
import { DashboardService } from './dashboard/dashboard.service';


@NgModule({
  declarations: [
    AppComponent, routingComponents,
    ApiResponseTreeViewComponent,
    CardComponent, ChartComponent,
    MapComponent, NotificationComponent,
    TableComponent, AddCardDialogComponent,
    NavigationBarComponent,
    SidebarComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    UserOverviewComponent,
    DashboardComponent,
    CardGridComponent,
    CreateDashboardDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [CardSharingService, APIResponseProviderService, CardDesignerService, DashboardService],
  entryComponents: [AddCardDialogComponent,CreateDashboardDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
