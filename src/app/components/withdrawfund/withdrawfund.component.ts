import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletbackendService } from 'src/app/service/walletbackend.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-withdrawfund',
  templateUrl: './withdrawfund.component.html',
  styleUrls: ['./withdrawfund.component.css']
})
export class WithdrawfundComponent {
  constructor(private walletbackend:WalletbackendService){}
  wallet:Wallet=new Wallet();
  toid?:number

onSubmit()
{
  let walletPost: Observable<any> =this.walletbackend.Withdraw(this.wallet.id,this.wallet.balance);
  walletPost.subscribe({
    next:(data)=>
    {
        console.log(data);
    },
    error:(error)=>
    {
      console.log(error);
    },
    complete:()=>{
      console.log("post request completed");
    }
  }
  )
}
}
