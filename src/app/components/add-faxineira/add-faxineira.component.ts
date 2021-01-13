import { FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Faxineira } from 'src/app/model/faxineira-model';
import { AngularFireModule } from '@angular/fire';
import { AddFaxineiraService } from './add-faxineira.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-faxineira',
  templateUrl: './add-faxineira.component.html',
  styleUrls: ['./add-faxineira.component.css']
})
export class AddFaxineiraComponent implements OnInit {
  novaFaxineira: Faxineira;
  wasFormChanged = false;
  key: string = '';
  
  constructor(public dialog: MatDialog, private addFaxineiraService: AddFaxineiraService) {
  };
  
  closeFaxineira(): void {
    this.dialog.closeAll();
  }
  
  ngOnInit() {
    this.novaFaxineira = new Faxineira();
  }

  adicionarFaxineira() {
    if(this.key) {
    } else {
      let addFaxineira = {...this.novaFaxineira};
      this.addFaxineiraService.insert(addFaxineira);
    }
    this.novaFaxineira = new Faxineira();
    this.dialog.closeAll();
  }

  input = new FormControl(null, [Validators.required]);
  getErrorMessage(){
    if(this.input.hasError('required')){
      return 'Campo obrigatório';
    };
  };

}