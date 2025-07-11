import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndRatingComponent } from './review-and-rating.component';

describe('ReviewAndRatingComponent', () => {
  let component: ReviewAndRatingComponent;
  let fixture: ComponentFixture<ReviewAndRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAndRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAndRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
