import { Component } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [headerComponent,
   ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class headerComponent {
currentLang = 'en';




}
