import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'userWork-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
})
export class WorkHistoryComponent implements OnInit {
  constructor(private clientService: clientService, private router: Router) {}

  history: any;

  ngOnInit(): void {
    this.clientService.workHistoryGet().subscribe((res) => {
      console.log(res);
      this.history = res;
    });
  }

  // work history open
  open(id: string) {
    this.router.navigate([`/client/detailWorkView/${id}`]);
  }
}
