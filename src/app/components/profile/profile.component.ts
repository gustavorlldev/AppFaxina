import { Component, OnInit, Input, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GenericValidator } from './cpfValidator';
import { UserService } from "./profile.service";
import { UserData } from './userData';
import { UserDataService } from './profile-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserData;
  key: string = '';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private _userService: UserService, 
              private _userDataService: UserDataService,
              private router: Router) {}

  ngOnInit() {

    this.user = new UserData();
    this._userDataService.currentUser.subscribe(data => {
      if( data.user && data.key) {
        this.user = new UserData();
        this.user.nome = data.user.nome;
        this.user.sobrenome = data.user.sobrenome;
        this.user.email = data.user.email;
        this.user.sexo = data.user.sexo;
        this.user.idade = data.user.idade;
        this.user.cpf = data.user.cpf;
        this.user.whatsApp = data.user.whatsApp;
        this.key = data.key;
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
    this.user = new UserData();
    this.key = null;
    this.router.navigate(['/home']);
  }

  formulario: FormGroup = this.formBuilder.group({
    'name': ['', [Validators.required]],
    'lastname': ['',[Validators.required]],
    'email': ['',[Validators.required, Validators.email]],
    'gender': ['',[Validators.required]],
    'age': ['', [Validators.required]],
    'cpf': ['',[Validators.required]],
    'whatsapp': ['',[Validators.required]]
  })

  email = new FormControl('', [Validators.required, Validators.email]);
  inputs = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo obrigatório';
    }
    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }

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
