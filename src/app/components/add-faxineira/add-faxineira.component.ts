import {​​​​​ FormControl, FormGroup }​​​​​ from '@angular/forms';
import {​​​​​ Component, OnInit, Inject }​​​​​ from '@angular/core';
import {​​​​​ MatDialog }​​​​​ from '@angular/material';
import {​​​​​ Faxineira }​​​​​ from 'src/app/model/faxineira-model';
import {​​​​​ AngularFireModule }​​​​​ from '@angular/fire';
import {​​​​​ AddFaxineiraService }​​​​​ from './add-faxineira.service';
import {​​​​​ Validators }​​​​​ from '@angular/forms';
import swal from 'sweetalert';

@Component({​​​​​
  selector: 'app-add-faxineira',
  templateUrl: './add-faxineira.component.html',
  styleUrls: ['./add-faxineira.component.css']
}​​​​​)
export class AddFaxineiraComponent implements OnInit {​​​​​
  novaFaxineira: Faxineira;
  wasFormChanged = false;
  key: string = '';

  constructor(public dialog: MatDialog, private addFaxineiraService: AddFaxineiraService) {​​​​​
  }​​​​​;

  ngOnInit() {​​​​​
    // this.novaFaxineira = new Faxineira();
    this.novaFaxineira = new Faxineira(), new FormGroup({
      titulo: new FormControl(this.novaFaxineira.titulo, Validators.required),
      descricao: new FormControl(this.novaFaxineira.descricao, Validators.required),
      contato: new FormControl(this.novaFaxineira.contato, Validators.required),
      localidade: new FormControl(this.novaFaxineira.localidade, Validators.required),
      });
  }​​​​​

  closeFaxineira(): void {​​​​​
    this.dialog.closeAll();
  }​​​​​

  adicionarFaxineira() {​​​​​
    if(this.key) {​​​​​
      {
        swal(
          {​​
          title: 'Erro!',
          text: 'Por Favor Complete os Campos Obrigatórios!',
          icon: 'error',
          }​​)
      }
    }​​​​​ else {​​​​​
      let addFaxineira = {​​​​​...this.novaFaxineira}​​​​​;
      this.addFaxineiraService.insert(addFaxineira);
    }​​​​​
    this.novaFaxineira = new Faxineira();
    this.dialog.closeAll();
    swal(
      {​​
      title: 'Parabens!',
      text: 'Anúncio Publicado com Sucesso!',
      icon: 'success',
      }​​)
  }​​​​​
  input = new FormControl(null, [Validators.required]);
  getErrorMessage(input){​​​​​
    if(this.input.hasError('required')){​​​​​
      return 'Campo obrigatório';
    }​​​​​;
  }​​​​​;
}​​​​​
