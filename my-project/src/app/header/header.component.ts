import { Component, Renderer2 } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import {  TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [headerComponent,  FormsModule
   ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class headerComponent {
     currentLang ='E'
     isEnglish=true
constructor(private translate: TranslateService) {
 
    translate.addLangs(['en', 'hi']);
    const savedLang = localStorage.getItem('lang') || 'en';
    console.log(savedLang)
    translate.use(savedLang);
  }

  onLanguageToggle() {
    
    this.currentLang = this.isEnglish ? 'en' : 'hi'



  }


}

 

