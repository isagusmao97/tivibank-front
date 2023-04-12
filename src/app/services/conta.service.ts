import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conta } from './conta.model';


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

  // saldoConta(saldo:Conta): Observable<Conta>{
  //   return this.http.get<Conta[]>(this.apiUrl);
  // }

  // saqueConta(saque: Conta): Observable<Conta> {
  //   return this.http.put<Conta>(this.apiUrl, saque);
  // }

  // depositoConta(deposito: Conta): Observable<Conta> {
  //   return this.http.put<Conta>(this.apiUrl, deposito);
  // }

}
