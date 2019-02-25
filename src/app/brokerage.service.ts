import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrokerageService {

  uri = 'http://localhost:4000/brokerage';

  constructor(private http: HttpClient) { }

  addBrokrage(type, rate, start_date,end_date) {
    const obj = {
      type: type,
      rate: rate,
      start_date: start_date,
      end_date:end_date
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBrokrages() {
    return this
           .http
           .get(`${this.uri}`);
  }
  
  editBrokerage(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updateBrokerage(type, rate, start_date, end_date,id) {      

      const obj = {
          id:id,
          type: type,
          rate: rate,
          start_date: start_date,
          end_date:end_date 
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

  deleteBrokerage(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
