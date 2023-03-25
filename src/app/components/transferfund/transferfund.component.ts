import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletbackendService } from 'src/app/service/walletbackend.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transferfund',
  templateUrl: './transferfund.component.html',
  styleUrls: ['./transferfund.component.css']
})
export class TransferfundComponent {
  constructor(private walletbackend:WalletbackendService){}
  wallet:Wallet=new Wallet();
  toid?:number

onSubmit()
{
  let walletPost: Observable<any> =this.walletbackend.Transfer(this.wallet.id,this.toid,this.wallet.balance);
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
      console.log("pot request completed");
    }
  }
  )
}

}
