import { Component, OnInit, Input, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GenericValidator } from './cpfValidator';
import { UserService } from "./profile.service";
import { Usuario } from '../login/usuario';
import { UserDataService } from './profile-data.service';
import { AuthService } from "../login/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Usuario;
  key: string = '';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private _userService: UserService, 
              private _userDataService: UserDataService,
              private router: Router) {}

  ngOnInit() {

    this.user = new Usuario();
    this._userDataService.currentUser.subscribe(data => {
      if( data.user && data.key) {
        this.user = new Usuario();
        this.user.nome = data.user.nome;
        this.user.sobrenome = data.user.sobrenome;
        this.user.sexo = data.user.sexo;
        this.user.idade = data.user.idade;
        this.user.cpf = data.user.cpf;
        this.user.whatsApp = data.user.whatsApp;
        this.user.fotoDoPerfil = data.user.fotoDoPerfil;
        this.key = data.key;
        debugger
      }
    })

    this.form = this.formBuilder.group({
      cpf: this.formBuilder.control({ value: null, disabled: false}, GenericValidator.isValidCpf())
    })
  }

  onSubmit() {
    if(this.key) {
      this._userService.update(this.user, this.key);
    } else {
      this._userService.insert(this.user);
    }
    this.user = new Usuario();
    debugger;
    this.key = null;
    this.router.navigate(['/home']);
    console.log(this.user)
  }

  forms: FormGroup = this.formBuilder.group({
    'name': ['', [Validators.required]],
    'lastname': ['',[Validators.required]],
    'gender': ['',[Validators.required]],
    'age': ['', [Validators.required]],
    'cpf': ['',[Validators.required]],
    'whatsapp': ['',[Validators.required]]
  })
 
  inputs = new FormControl('', [Validators.required])

  url = '../../assets/img/user.png';

  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: Event) => {
          this.url = (<FileReader>event.target).result as string;
      }
    }
  }
}
