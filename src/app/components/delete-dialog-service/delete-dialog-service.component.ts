import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialogRef,MatDialog} from '@angular/material';

@Component({
  selector: 'app-delete-dialog-service',
  templateUrl: './delete-dialog-service.component.html',
  styleUrls: ['./delete-dialog-service.component.css']
})
export class DeleteDialogServiceComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
                  private dialogRef: MatDialogRef<DeleteDialogServiceComponent>) {} // Closing dialog window

    public cancel(): void { // To cancel the dialog window
    this.dialogRef.close();
    }

    public cancelN(): void {
        this.dialog.closeAll();
    }

    ngOnInit() {
    }
    }
