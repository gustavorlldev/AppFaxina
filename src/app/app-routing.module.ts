import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [

  {path: '', component: LoginComponent},
<<<<<<< Updated upstream
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
=======
  {path: 'home', component: HomeComponent},
  //{path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
>>>>>>> Stashed changes
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
