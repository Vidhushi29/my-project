import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './main-app.component';
import { WebLoginComponent } from './web-login/web-login.component';



@NgModule({
  declarations: [WebLoginComponent,MainAppComponent],
  imports: [
    CommonModule,
  ]
})
export class MainAppModule { }
