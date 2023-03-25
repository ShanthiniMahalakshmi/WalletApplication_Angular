import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletbackendService } from 'src/app/service/walletbackend.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
constructor(private walletbackend:WalletbackendService){}
  wallet:Wallet=new Wallet();
onSubmit()
{
  let walletPost: Observable<any> =this.walletbackend.addWallet(this.wallet);
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
