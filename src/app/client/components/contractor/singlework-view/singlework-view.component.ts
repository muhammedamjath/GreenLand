import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singlework-view',
  templateUrl: './singlework-view.component.html',
  styleUrls: ['./singlework-view.component.css']
})
export class SingleworkViewComponent implements OnInit {
  // User Details
  userName = 'John Doe';
  userEmail = 'john@example.com';
  userPhone = '(123) 456-7890';

  // Work Location
  workState = 'California';
  workDistrict = 'Los Angeles';
  workPlace = 'Downtown';

  // Company Details
  companyName = 'Best Contractors Inc.';
  companyPhotoUrl = 'path/to/company/logo.jpg';
  companyCategory = 'Residential Construction';

  // Work Updates
  workUpdates = [
    { date: new Date('2024-03-01'), description: 'Project initiated' },
    { date: new Date('2024-03-05'), description: 'Materials purchased' }
  ];

  updateForm: FormGroup;
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      updateDescription: ['', Validators.required]
    });

    this.projectForm = this.fb.group({
      totalArea: ['', Validators.required],
      contractAmount: ['', Validators.required],
      workDuration: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addUpdate(): void {
    if (this.updateForm.valid) {
      const newUpdate = {
        date: new Date(),
        description: this.updateForm.get('updateDescription')?.value
      };
      console.log(newUpdate);
      
      this.workUpdates.push(newUpdate);
      this.updateForm.reset();
    }
  }

  submitProjectDetails(): void {
    if (this.projectForm.valid) {
      console.log('Project details submitted:', this.projectForm.value);
      // Here you would typically send this data to a service/backend
    }
  }

  generateInvoice(): void {
    console.log('Generating invoice...');
    // Implement invoice generation logic here
  }
}
