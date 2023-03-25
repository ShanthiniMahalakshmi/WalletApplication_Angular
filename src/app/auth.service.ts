import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallet } from './model/Wallet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  userLogin(wallet:Wallet):Observable<any>{
    return this.httpClient.post("http://localhost:8090/login",wallet,{responseType:'json'});
  }
}
