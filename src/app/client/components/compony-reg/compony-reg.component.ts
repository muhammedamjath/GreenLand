import { Component } from '@angular/core';
import { componyReg } from 'src/app/models/componyRegistration';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-compony-reg',
  templateUrl: './compony-reg.component.html',
  styleUrls: ['./compony-reg.component.css']
})
export class ComponyRegComponent {

  constructor(private clientService:clientService){}

  componyReg(data:any){
    const datas : componyReg =data as componyReg
    console.log(datas);
    
    this.clientService.componyReg(datas).subscribe(
      (res)=>{
        console.log(res);
        
      }
    )
    
  }

}
