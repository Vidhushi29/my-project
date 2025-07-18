import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-book-appointment',
 imports:      [  CommonModule ],

  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css'
})

export class BookAppointmentComponent implements OnInit {
  bookingForm!: FormGroup;
showPopup:boolean=true
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
    });
  }
  closeDiv() {
    console.log(this.showPopup)
    this.showPopup = false;
    console.log(this.showPopup,"hello ")
  }
  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Booking Data:', this.bookingForm.value);
      // You can send the data to your backend here
    } else {
      console.log('Form is invalid');
    }
  }
}
