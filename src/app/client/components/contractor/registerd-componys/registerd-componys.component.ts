import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'registerd-componys',
  templateUrl: './registerd-componys.component.html',
  styleUrls: ['./registerd-componys.component.css']
})
export class RegisterdComponysComponent implements OnInit {
  constructor(private clientService:clientService , private router:Router){}

  
  datas:any=''
  ngOnInit() {
    this.clientService.registeredcomponys().subscribe((res)=>{
      this.datas=res.datas
    })
  }

  editItem(id:any){
    this.clientService.componyDetails(id).subscribe((res)=>{
      if(res){
        this.clientService.componyData=res
        this.router.navigate(['/client/updateCompony' ])
      }
    })
  }

}
