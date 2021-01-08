import { DeleteDialogServiceComponent } from 'src/app/components/delete-dialog-service/delete-dialog-service.component';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Faxina } from 'src/app/model/faxina-model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-faxina',
  templateUrl: './add-faxina.component.html',
  styleUrls: ['./add-faxina.component.css']
})
export class AddFaxinaComponent implements OnInit {
  listaDeFaxina: Faxina[] = [];
  novaFaxina: Faxina;
  wasFormChanged = false;

  adicionarFaxina() {
    this.listaDeFaxina.push(this.novaFaxina);
  }

  constructor(public dialog: MatDialog) {

    this.novaFaxina = new Faxina();

   }

   openDialog(): void {

      this.dialog.closeAll();

  }

  ngOnInit() {
  }

}
