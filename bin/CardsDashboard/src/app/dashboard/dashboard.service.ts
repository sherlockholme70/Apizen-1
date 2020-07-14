import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardBean } from './dashboard.model';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class DashboardService {

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  getDashboardData(dashboardID: String): Observable<DashboardBean> {
    return this.httpClient.get<DashboardBean>('http://localhost:8281/DashboardService/getDashboard/' + dashboardID);
  }
}
