import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Faxineira } from 'src/app/model/faxineira-model'

@Component({
  selector: 'app-add-faxineira',
  templateUrl: './add-faxineira.component.html',
  styleUrls: ['./add-faxineira.component.css']
})
export class AddFaxineiraComponent implements OnInit {
  listaFaxineira: Faxineira[] = [];
  novaFaxineira: Faxineira;
  wasFormChanged = false;

  adicionarFaxineira() {
    this.listaFaxineira.push(this.novaFaxineira);
  }

  constructor(public dialog: MatDialog) {
    this.novaFaxineira = new Faxineira();
  };

  closeFaxineira(): void {
    this.dialog.closeAll();
  }

  ngOnInit() {
  }
}