import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardBean } from './dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class CardGridService {

  constructor(private httpClient: HttpClient) { 
  }
  
  saveDashboard(dashboardBean: DashboardBean): Observable<DashboardBean> {
    return this.httpClient.post<DashboardBean>('http://localhost:8281/DashboardService/saveDashboard', dashboardBean);
 }

 

}
