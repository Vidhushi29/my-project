import { Routes } from '@angular/router';
import { WebLoginComponent } from './web-login/web-login.component';
import { ReviewAndRatingComponent } from './review-and-rating/review-and-rating.component';

export const routes: Routes = [
     { path: 'login', component: WebLoginComponent },
     {path:'signup',component:WebLoginComponent},
     {path:'feedback',component:ReviewAndRatingComponent}
  
];
