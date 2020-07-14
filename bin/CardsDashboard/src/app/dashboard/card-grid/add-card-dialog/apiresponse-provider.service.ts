import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfigurationBean } from '../card/card-configuration.model';
import { Observable } from 'rxjs';

@Injectable()
export class APIResponseProviderService {

  constructor(private httpClient: HttpClient) { }

  getAPIResponse(apiConfigurationBean: APIConfigurationBean): Observable<String> {
     return this.httpClient.post<String>('http://localhost:8281/APIService/getAPIResponse', apiConfigurationBean);
  }

   // My-code
   getDatabaseConnectionResponse(dataBaseConfigurationBean: DataBaseConfigurationBean): Observable<String> {
    return this.httpClient.post<String>('http://localhost:8281/DatabaseService/getDatabaseResponse',
    dataBaseConfigurationBean);    
  }
}
