import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
