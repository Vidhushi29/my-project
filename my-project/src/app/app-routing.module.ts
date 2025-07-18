import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebLoginComponent } from './web-login/web-login.component';
import { ReviewAndRatingComponent } from './review-and-rating/review-and-rating.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';



const routes: Routes = [

  { path: 'login', component: WebLoginComponent },

  { path: 'signup', component: WebLoginComponent },
  { path: 'feedback', component: ReviewAndRatingComponent },
{path:'book-appointment',component:BookAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }