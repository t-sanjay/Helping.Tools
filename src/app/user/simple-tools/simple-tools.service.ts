import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SimpleToolsService {
  currencyKey = environment.currencyKey;

  constructor(private http: HttpClient) {}

  getCurrencyCodes(): Observable<any> {
    return this.http.get<any>(
      `https://v6.exchangerate-api.com/v6/${this.currencyKey}/codes`
    );
  }

  getExchangeResult(data): Observable<any> {
    return this.http.get<any>(
      `https://v6.exchangerate-api.com/v6/${this.currencyKey}/pair/${data.from}/${data.to}/${data.amount}`
    );
  }

  //Chat GPT calls
}
