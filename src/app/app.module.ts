import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DisplayComponent } from './components/display/display.component';
import { AddfundComponent } from './components/addfund/addfund.component';
import { WithdrawfundComponent } from './components/withdrawfund/withdrawfund.component';
import { TransferfundComponent } from './components/transferfund/transferfund.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { WalletbackendService } from './service/walletbackend.service';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DisplayComponent,
    AddfundComponent,
    WithdrawfundComponent,
    TransferfundComponent,
    
    HomeComponent,
    DemoComponent,
    LoginComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [WalletbackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
