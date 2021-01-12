import { AddFaxinaComponent } from './../add-faxina/add-faxina.component';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddFaxineiraComponent } from './../add-faxineira/add-faxineira.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

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
  }

}
