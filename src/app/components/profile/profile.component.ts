import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from '../../shared/person/person'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formPerson: FormGroup;

  createForm(person: Person) {
    this.formPerson = new FormGroup({
      name: new FormControl(person.name),
      lastName: new FormControl(person.lastName),
      email: new FormControl(person.email),
      gender: new FormControl(person.gender),
      cpf: new FormControl(person.cpf),
      contact: new FormControl(person.contact),
      image: new FormControl(person.image)
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
