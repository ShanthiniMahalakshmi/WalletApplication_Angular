import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Wallet } from '../model/Wallet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletbackendService {

  constructor(private httpclient:HttpClient) {}
    addWallet(newwallet:Wallet):Observable<any>{
      return this.httpclient.post("http://localhost:8090/wallet",newwallet,{responseType:'json'});
  }
  deleteEmployeeById(id?:number):Observable<any>{
    return this.httpclient.delete("http://localhost:8090/wallet/"+id);
  }
  updateEmployee(newwallet:Wallet):Observable<any>{
    return this.httpclient.put("http://localhost:8090/v1/wallet",newwallet);
  }
  getAllEmployees():Observable<any>{
    return this.httpclient.get("http://localhost:8090/wallets");
  }
  fund(id?:number,balance?:number):Observable<any>{
    let body = {'id':id,'balance':balance};
    return this.httpclient.patch("http://localhost:8090/wallet/"+encodeURIComponent(String(id))+"/"+encodeURIComponent(String(balance)),body);
    //return this.httpclient.patch("http://localhost:8090/wallet/"+newwallet.id,newwallet.balance);
  }
  Withdraw(id?:number,balance?:number):Observable<any>{
    let body = {'id':id,'balance':balance};
    return this.httpclient.patch("http://localhost:8090/wallet/"+encodeURIComponent(String(id))+"/fund/"+encodeURIComponent(String(balance)),body);
    //return this.httpclient.patch("http://localhost:8090/wallet/"+newwallet.id,newwallet.balance);
  }
  Transfer(id?:number,toid?:number,balance?:number):Observable<any>{
    let body = {'id':id,'balance':balance};
    return this.httpclient.patch("http://localhost:8090/wallet/"+encodeURIComponent(String(id))+"/transfer/"+encodeURIComponent(String(toid))+"/"+encodeURIComponent(String(balance)),body);
    //return this.httpclient.patch("http://localhost:8090/wallet/"+newwallet.id,newwallet.balance);
  }
}
   

