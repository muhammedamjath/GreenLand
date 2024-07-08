import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private clientService:clientService , private router:Router){}

  history:any

  ngOnInit(): void {
    this.clientService.workHistoryGet().subscribe((res)=>{
      this.history=res
      
    })
  }

  open(id:string){
    this.router.navigate([`/client/singleworkView/${id}`])
  }
}
