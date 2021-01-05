import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, NgModule, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, public dialog: MatDialog) { }


  ngOnInit() {
  }

  login(){
    this.authService.login(this.usuario);
  }

}






