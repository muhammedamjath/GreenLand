import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detailed-compony-view',
  templateUrl: './detailed-compony-view.component.html',
  styleUrls: ['./detailed-compony-view.component.css'],
})
export class DetailedComponyViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private clientService: clientService,
    private fb: FormBuilder
  ) {}

  // form 
  connectionForm!: FormGroup;

  componyId: string = '';
  componyDetailes: any;
  btnStatus: any = null;
  reviews:any
  btndisabled: boolean = false;
  conncetionform: boolean = false;
  spinner: boolean = false;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.componyId = params['id'];
    });

    // reviews get
    this.clientService.reviewsGet(this.componyId).subscribe((res)=>{
      console.log(res);
      this.reviews=res
      
    })

    // compony detailes get 
    this.clientService.componyDetails(this.componyId).subscribe((res) => {
      this.componyDetailes = res;
    });

    // notification get 
    this.clientService.notificationGet(this.componyId).subscribe((res) => {
      this.btnStatus = res;
      if (this.btnStatus) {
        this.btndisabled = true;
      }
    });

    // form validation
    this.connectionForm = this.fb.group({
      componyId: [this.componyId],
      district: ['', Validators.required],
      placeOfWork: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)],
      ],
    });
  }

  // connection requst btn function
  onConnect(id: any) {
    let that = this;
    this.clientService.notification(id).subscribe(
      (res) => {
        this.btnStatus = res;
        this.spinner = true;
        this.btndisabled = true;
        setTimeout(function () {
          that.conncetionform = true;
          that.spinner = false;
        }, 1000);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // location form submit function 
  onSubmit() {
    if (this.connectionForm.valid) {
      this.clientService
        .locationSave(this.connectionForm.value)
        .subscribe((res) => {
          this.conncetionform = false;
        });
    }
  }

  // syle of the btn related to connection requst
  btnStyle() {
    return {
      'background-color': this.btndisabled ? '#ccc' : 'blue',
      "cursor": this.btndisabled ? "not-allowed" :'pointer'
    };
  }

  createArray(length: number): any[] {
    return new Array(length);
  }
}
