import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContaService {

  apiUrl = 'http://localhost:3000/tivibank-api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'aplication/json'
    })
  };

  constructor( private httpClient : HttpClient) { }

  public getConta(){
    return this.httpClient.get(`${this.apiUrl}/tivibank-api`)
  }

  

  
}
