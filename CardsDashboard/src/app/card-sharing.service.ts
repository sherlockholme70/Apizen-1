import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardBean } from './dashboard/card-grid/card/card.model';
import { DashboardBean } from './dashboard/dashboard.model';

@Injectable()
export class CardSharingService {
    private cardDataSource = new BehaviorSubject<CardBean>(new CardBean());
    private apiResponseDataSource = new BehaviorSubject<String>(null);
    private dashboardDataSource = new BehaviorSubject<DashboardBean>(new DashboardBean());

    apiResponseData = this.apiResponseDataSource.asObservable();
    cardData = this.cardDataSource.asObservable();

    updateCardData(cardBean: CardBean) {
        this.cardDataSource.next(cardBean);
    }
    updateAPIResponseData(apiResponse: String) {
        this.apiResponseDataSource.next(apiResponse);
    }
    updateDashboardData(dashboardBean: DashboardBean) {
        this.dashboardDataSource.next(dashboardBean);
    }
}
