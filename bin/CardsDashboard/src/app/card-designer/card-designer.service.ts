import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CardBean } from '../dashboard/card-grid/card/card.model';

@Injectable()
export class CardDesignerService {

  constructor(private httpClient: HttpClient) { }

  saveCard(cardBean: CardBean): Observable<CardBean> {
    return this.httpClient.post<CardBean>('http://localhost:8281/CardService/saveCard', cardBean);
 }
}
