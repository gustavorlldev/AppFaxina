import { SnackbarService } from './../../shared/snackbar/snackbar.service';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  
  private userAuth: boolean = false;
  
    showMenuEmitter = new EventEmitter<boolean>();
 
  constructor(private router: Router, private snackBarService: SnackbarService) {
  
   }
  
  login(usuario: Usuario){

    if(usuario.user === 'usuario@email.com' &&
    usuario.password === '123456') {
      this.userAuth = true;
      this.showMenuEmitter.emit(true);

      this.snackBarService.openSnackBar('Usuario logado com Sucesso')

      this.router.navigate(['home'])

    } else {

      this.userAuth = false;

      this.snackBarService.openSnackBar('Credenciais inválidas')

      this.showMenuEmitter.emit(false);
    }
  }

  AuthUser(){
    return this.userAuth;
  }


}
