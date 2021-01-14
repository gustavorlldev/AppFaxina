
import { AddFaxinaComponent } from './../add-faxina/add-faxina.component';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddFaxineiraComponent } from './../add-faxineira/add-faxineira.component';
import { Usuario } from './../login/usuario';
import { Observable } from 'rxjs';
import { AddFaxineiraService } from '../add-faxineira/add-faxineira.service';
import { FaxineiraDataService } from '../add-faxineira/faxineira-data.service';
import { Faxineira } from '../add-faxineira/faxineira';
import { AddFaxinaService } from './../add-faxina/add-faxina.service';
import { FaxinaDataService } from '../add-faxina/faxina-data.service';
import { Faxina } from '../add-faxina/faxina';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  faxineira: Observable<any>;
  faxina: Observable<any>;
  searchFaxina: string = '';

  constructor(public dialog: MatDialog, private addFaxineiraService: AddFaxineiraService, private faxineiraDataService: FaxineiraDataService,  private addFaxinaService: AddFaxinaService, private faxinaDataService: FaxinaDataService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFaxinaComponent,{
      width: '640px',disableClose: true
  });
  }
  openFaxineira(): void {
    const faxineiraRef = this.dialog.open(AddFaxineiraComponent,{
      width: '640px',disableClose: true
  });
  }
  ngOnInit() {
    this.faxineira = this.addFaxineiraService.getAll();
    this.faxina = this.addFaxinaService.getAll();
  }

}
