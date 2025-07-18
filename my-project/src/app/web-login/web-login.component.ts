import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-web-login',
  imports: [CommonModule,RouterModule],
  templateUrl: './web-login.component.html',
  styleUrl: './web-login.component.css'
})
export class WebLoginComponent {
loginForm: FormGroup;
@Input() isSignup = true;
  showPassword: boolean=false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

 
    onSubmit(): void {
      // Perform form submission logic here (e.g., send data to a backend)

      // Redirect to another page after successful submission
      this.router.navigate(['/book-appointment']); // Replace '/success-page' with your desired route
    }
  
  togglePassword() {
  this.showPassword = !this.showPassword;
}
}
