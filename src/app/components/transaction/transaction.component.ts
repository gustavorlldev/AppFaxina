import { AddFaxinaComponent } from './../add-faxina/add-faxina.component';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

  ngOnInit() {
  }

}
