import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {  TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [headerComponent,  FormsModule,RouterModule,CommonModule
   ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class headerComponent {
     currentLang ='E'
     isEnglish=true
      showSearch = false;
   searchQuery = '';
   hideOnScroll = false;
   closeSearch:boolean=false;

constructor(private translate: TranslateService) {
 
    translate.addLangs(['en', 'hi']);
    const savedLang = localStorage.getItem('lang') || 'en';
    console.log(savedLang)
    translate.use(savedLang);
  }

  onLanguageToggle() {
    
    this.currentLang = this.isEnglish ? 'en' : 'hi'



  }
 
  toggleSearch() {
    console.log(this.showSearch)
    this.showSearch = !this.showSearch;
  
  }
 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.hideOnScroll = scrollY > 100; // adjust threshold as needed
  }

}

 

