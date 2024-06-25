import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userService:clientService , private router:Router){}
  userData:any
   ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token){
      this.userService.getUser().subscribe((res)=>{
        this.userData=res.userData
      },
    (err)=>{
      console.log('the errr is :',err);
      if(err.error == 'Invalid token' ){}
        localStorage.removeItem('token')
        this.router.navigate([''])
    })
    }
   }
}
