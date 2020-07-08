import { CardBean } from './card-grid/card/card.model';

export class DashboardBean {
    dashboardID ?: String;
    dashboardName?: String;
    username?: String;
    createDate?: Date;
    updateDate?: Date;
    public cards: CardBean[] ;
}
