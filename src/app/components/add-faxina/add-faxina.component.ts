import { Component, OnInit } from '@angular/core';
import { Faxina } from 'src/app/model/faxina-model';

@Component({
  selector: 'app-add-faxina',
  templateUrl: './add-faxina.component.html',
  styleUrls: ['./add-faxina.component.css']
})
export class AddFaxinaComponent implements OnInit {
  listaDeFaxina: Faxina[] = [];
  novaFaxina: Faxina;

  adicionarFaxina() {
    this.listaDeFaxina.push(this.novaFaxina);
  }

  constructor() {

    this.novaFaxina = new Faxina();

   }

  ngOnInit() {
  }

}
