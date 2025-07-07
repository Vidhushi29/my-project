import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppModule } from './main-app/main-app.module';
import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';



@NgModule({
  declarations: [AppComponent,MainAppComponent],
  imports: [
    CommonModule,MainAppModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
