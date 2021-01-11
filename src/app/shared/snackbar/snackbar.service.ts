import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})


export class SnackbarService {
  open(arg0: string, arg1: string, arg2: { duration: number; verticalPosition: string; }) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }
}
