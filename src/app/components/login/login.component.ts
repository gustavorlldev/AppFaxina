import { Router } from '@angular/router';
import { SnackbarService } from './../../shared/snackbar/snackbar.service';
import { Usuario } from "./usuario";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {
  
  
  constructor(private fb: FormBuilder, private autenticacao: AuthService, private snackBar: SnackbarService, private router: Router){}

  //Metodo que instacia os Forms
  formulario: FormGroup = this.fb.group({
    'user': ['', [Validators.required]],
    'email': ['',[Validators.required, Validators.email]],
    'senha': ['',[Validators.required, Validators.minLength(6)]]
  })

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'senha': ['', [Validators.required, Validators.minLength(6)]]
  })

  loading: boolean = false

  ngOnInit() {

  }

  private loginOkNotification(u: Usuario) {
    this.snackBar.openSnackBar('Bem vindo ao AppFaxina')
  }
  private loginErrorNotNotification(err) {
    this.snackBar.openSnackBar('Erro')
  }

  //Metodo Pegar Dados do Usuario
  onSubmit(){
    const newUser:Usuario={
      user :this.formulario.value.user,
      email :this.formulario.value.email,
      senha :this.formulario.value.senha
    }

  
    this.autenticacao.register(newUser).subscribe((u) => {
      this.snackBar.openSnackBar('Usuario logado com Sucesso')

      this.router.navigate(['/'])
    },
    (err)=>{
      console.log(err);
      this.snackBar.openSnackBar('Algum campo Invalido')

      })
    }


    onLogin() {
      this.loading = true;
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.senha;
      this.autenticacao.login(
        email,password
      ).subscribe((u) => {
        this.loginOkNotification(u);
        this.router.navigateByUrl('/home');
        this.loading = false
  
      },
        (err) => {
          this.loginErrorNotNotification(err);
          this.loading = false
      })
    }
    
  }
    

