import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfundComponent } from './components/addfund/addfund.component';
import { DemoComponent } from './components/demo/demo.component';
import { DisplayComponent } from './components/display/display.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TransferfundComponent } from './components/transferfund/transferfund.component';
import { WithdrawfundComponent } from './components/withdrawfund/withdrawfund.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:'demo',component:DemoComponent},
  {path:'home',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path:'addfund',component:AddfundComponent},
  {path:'display',component:DisplayComponent},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'transferfund',component:TransferfundComponent},
  {path:'withdrawfund',component:WithdrawfundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
