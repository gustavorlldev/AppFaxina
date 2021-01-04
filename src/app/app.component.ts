import { AuthService } from './components/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appFaxina';

  showMenu: boolean = false;

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }
}
