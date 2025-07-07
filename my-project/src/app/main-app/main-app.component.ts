import { Component } from '@angular/core';
import { WebLoginComponent } from './web-login/web-login.component';
import { headerComponent } from '../header/header.component';


@Component({
  selector: 'app-main-app',
  imports: [WebLoginComponent,headerComponent],
  standalone:true,
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent {

}
