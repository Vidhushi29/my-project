import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { WebLoginComponent } from './web-login/web-login.component';
import { headerComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WebLoginComponent,headerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
