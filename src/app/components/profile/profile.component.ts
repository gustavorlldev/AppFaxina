import { Component, OnInit, Input, InjectionToken } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GenericValidator } from './cpfValidator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  @Input()
  email: string | boolean

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: this.formBuilder.control({ value: null, disabled: false}, GenericValidator.isValidCpf())
    })
  }

  url = '../../assets/img/user.png';

  onSelectFile(event) {
  
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: Event) => { 
          this.url = (<FileReader>event.target).result as string;
      }
    }
  } 
 
}
