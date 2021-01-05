import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

<<<<<<< Updated upstream
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
=======
>>>>>>> Stashed changes
  constructor() { }

  ngOnInit() {
  }

}
