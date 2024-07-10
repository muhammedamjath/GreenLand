import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  userData: any;
  allComponys: any;
  districts: string[] = [
    'Kasarkod',
    'Kannur',
    'Wayanad',
    'Kozhikode',
    'Malappuram',
    'Trissur',
    'Palakkad',
    'Ernamkulam',
    'Idukki',
    'Pathanamthitta',
    'Kottayam',
    'Kollam',
    'Alappuzha',
    'Thiruvananthapuram',
  ];
  works: string[] = [
    'Painting',
    'Carpender',
    'Roofing',
    'Floor',
    'Evacuation',
    'Foundation',
  ];
  constructor(
    private clientService: clientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clientService.getUser().subscribe((res) => {
      this.userData = res;
    });

    this.clientService.getAllCompony().subscribe((res) => {
      this.allComponys = res;
      console.log(this.allComponys);
    });
  }

  shareId(id: any) {
    this.router.navigateByUrl(`/client/detailedView/${id}`);
  }
}
