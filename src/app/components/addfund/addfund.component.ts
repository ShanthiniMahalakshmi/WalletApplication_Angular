import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletbackendService } from 'src/app/service/walletbackend.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.css']
})
export class AddfundComponent {
  constructor(private walletbackend:WalletbackendService){}
  wallet:Wallet=new Wallet();
  
onSubmit()
{
  let walletPost: Observable<any> =this.walletbackend.fund(this.wallet.id,this.wallet.balance);
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
