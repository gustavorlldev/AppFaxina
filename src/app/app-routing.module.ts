import { TransactionComponent } from './components/transaction/transaction.component';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { AddFaxineiraComponent } from './components/add-faxineira/add-faxineira.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'userprofile', component: UserProfileComponent},
  {path: 'faxineira', component: AddFaxineiraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
