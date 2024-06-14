import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { componyReg } from 'src/app/models/componyRegistration';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-compony-reg',
  templateUrl: './compony-reg.component.html',
  styleUrls: ['./compony-reg.component.css']
})
export class ComponyRegComponent {

  constructor(private clientService:clientService , private router:Router){}

  componyReg(data:any){
    const datas : componyReg =data as componyReg
    
    this.clientService.componyReg(datas).subscribe(
      (res)=>{
        this.router.navigate(['/client/contractorHome'])
        
      },
      (error) => {
        console.error('Error:', error);
        alert('invalid access to server');
      }
    )
    
  }

}
