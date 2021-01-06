import { LoginService } from "./login.service";
import { Usuario } from "./usuario";
import { AuthService } from "./auth.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private loginService: LoginService
  ) {}

  buscarTodosUsuarios(){
    this.loginService.getAll().subscribe((sucess) => {
      console.log('Array Abaixo Informando todos os Usuários Cadastrados');
      console.log(sucess);
    });
  }  

  buscarUsuarioAtravesDeLoginESenha(){
    //Abaixo Estou preenchendo HardCode já o seu Model pois estou chamando
    // Já direto no OnInit, Somente para deixar a função aqui já pronta, 
    // Amanhã você pode Montar sua Lógica de Login.
    // Lembrando de Salvar uma key no localStorage para auxiliar no guarda de rota
    // afim do mesmo verificar se o usuário está autenticado ou não.
    this.usuario.user = "teste";
    this.usuario.password = "teste";
    
    this.loginService
      .auth(this.usuario)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

  }

  inserirUsuario(){
    this.usuario.user = "Gustavo";
    this.usuario.password = "Exemplo";

    this.loginService.insert(this.usuario)
    .then(sucess => {console.log('Usuário Salvo Com Sucesso.')}),
          error => {console.log(`Ocorreu algum erro ao Tentar Salvar: ${error}`)
  }

  }

  ngOnInit() {
    this.buscarTodosUsuarios();
    this.buscarUsuarioAtravesDeLoginESenha();
    this.inserirUsuario();
  }

  login() {
    this.authService.login(this.usuario);
  }
}
