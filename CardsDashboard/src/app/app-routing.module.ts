import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDesignerComponent } from './card-designer/card-designer.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UserOverviewComponent},
  {path: 'dashboard/:dashboardID', component: DashboardComponent},
  {path: 'cardDesigner', component: CardDesignerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, CardDesignerComponent];
