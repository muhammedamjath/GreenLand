import { Component, OnInit } from '@angular/core';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private clientService:clientService){}

  history:any

  ngOnInit(): void {
    this.clientService.workHistoryGet().subscribe((res)=>{
      console.log(res);
      this.history=res
      
    })
  }
}
