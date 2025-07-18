import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { WebLoginComponent } from './web-login/web-login.component';
import { headerComponent } from './header/header.component';
import { ReviewAndRatingComponent } from './review-and-rating/review-and-rating.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WebLoginComponent,headerComponent,ReviewAndRatingComponent,BookAppointmentComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
