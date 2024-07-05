import { Component, OnInit } from '@angular/core';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'userWork-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {

  constructor(private clientService:clientService){}

  history:any

  ngOnInit(): void {
    this.clientService.workHistoryGet().subscribe((res)=>{
      console.log(res);
      this.history=res
      
    })
  }

}
