import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,TranslateModule,CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
