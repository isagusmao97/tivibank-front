import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conta } from './conta.model';


@Injectable({
  providedIn: 'root'
})
export class ContaService {

  apiUrl = 'http://localhost:3000';
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'aplication/json'
    })
  };

  constructor( private httpClient : HttpClient) { }

  saldoConta(): Observable<Conta>{
    const url = this.apiUrl + '/conta/dados';
    return this.httpClient.get<Conta>(url);
  }

  saqueConta(id:string, quantia:number): Observable<Conta> {
    const url = this.apiUrl + '/conta/saque/' + id;
    console.log(quantia)
    return this.httpClient.put<Conta>(url, {saldo:quantia});
  }

  depositoConta(id:string, quantia:number): Observable<Conta> {
    const url = this.apiUrl + '/conta/deposito/' + id;
    return this.httpClient.put<Conta>(url, {saldo:quantia});
  }

}
