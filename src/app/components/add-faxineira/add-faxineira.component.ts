import { Component, OnInit } from '@angular/core';
import { Faxineira } from 'src/app/model/faxineira-model'

@Component({
  selector: 'app-add-faxineira',
  templateUrl: './add-faxineira.component.html',
  styleUrls: ['./add-faxineira.component.css']
})
export class AddFaxineiraComponent implements OnInit {
  listaFaxineira: Faxineira[] = [];
  novaFaxineira: Faxineira;

  adicionarFaxineira() {
    this.listaFaxineira.push(this.novaFaxineira);
  }

  constructor() {
    this.novaFaxineira = new Faxineira();
  }

  ngOnInit() {
  }
}