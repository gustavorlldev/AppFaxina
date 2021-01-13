import { AddFaxinaService } from './add-faxina.service';
import { DeleteDialogServiceComponent } from 'src/app/components/delete-dialog-service/delete-dialog-service.component';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Faxina } from 'src/app/model/faxina-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-add-faxina',
  templateUrl: './add-faxina.component.html',
  styleUrls: ['./add-faxina.component.css']
})
export class AddFaxinaComponent implements OnInit {
  listaDeFaxina: Faxina[] = [];
  novaFaxina: Faxina;
  wasFormChanged = false;
  key: string = '';


  constructor(public dialog: MatDialog, private AddFaxinaService: AddFaxinaService) {
   }

   adicionarFaxina() {
    if(this.key) {
      {
        swal(
          {​​
          title: 'Erro!',
          text: 'Por Favor Complete os Campos Obrigatórios!',
          icon: 'error',
          }​​)
      }
    } else {
      let addFaxina = {...this.novaFaxina};
      this.AddFaxinaService.insert(addFaxina);
    }
    this.novaFaxina = new Faxina();
    this.dialog.closeAll();
    swal(
      {​​
      title: 'Parabens!',
      text: 'Anúncio Publicado com Sucesso!',
      icon: 'success',
      }​​)



  }

  input = new FormControl ('', [Validators.required]);
  getErrorMessage(){
    if (this.input.hasError('required')){
      return 'Campo Obrigatório';
    }
  }

  closeDialog(): void {

    this.dialog.closeAll();

}


  ngOnInit() {
    this.novaFaxina = new Faxina();
  }

}
