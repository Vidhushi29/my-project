import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // handle login
    }
  }
  togglePassword() {
  this.showPassword = !this.showPassword;
}
}
