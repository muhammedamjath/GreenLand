import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  ratingForm!: FormGroup;
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) {}

  @Output() formData = new EventEmitter<any>

  ngOnInit() {
    this.ratingForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.maxLength(300)]
    });
  }

  onSubmit() {
    if (this.ratingForm.valid) {
      // console.log(this.ratingForm.value);
      this.formData.emit(this.ratingForm.value)
    }
  }
}
