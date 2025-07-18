import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-review-and-rating',
  imports: [RouterModule,CommonModule],
  templateUrl: './review-and-rating.component.html',
  styleUrl: './review-and-rating.component.css'
})
export class ReviewAndRatingComponent {
reviewForm: FormGroup;
  stars = [1, 2, 3, 4, 5];
  rating = 0;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      name: ['Vidhushi'],
      feedback: ['']
    });
  }

  setRating(value: number) {
    this.rating = value;
  }

  submitReview() {
    const reviewData = {
      ...this.reviewForm.value,
      rating: this.rating
    };
    console.log('Review Submitted:', reviewData);
    // You can send reviewData to backend using HttpClient
  }
}
