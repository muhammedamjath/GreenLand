import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';
import { homeSerice } from 'src/app/services/homeService.service';

@Component({
  selector: 'animation-home',
  templateUrl: './animation-home.component.html',
  styleUrls: ['./animation-home.component.css']
})
export class AnimationHomeComponent implements OnInit {

  constructor(private homeService:homeSerice, private userService:clientService , private router:Router){}

  componyData:any[]=[]
  userData:any

  ngOnInit(): void {
    this.homeService.getComponys().subscribe((res)=>{
      this.componyData=res
      console.log(this.componyData);
      
    })

    const token = localStorage.getItem('token')
    if(token){
      this.userService.getUser().subscribe((res)=>{
        this.userData=res.userData
      },
    (err)=>{
      console.log('the errr is :',err);
      if(err.error == 'Invalid token' ){}
        localStorage.removeItem('token')
        console.log('removed from home');
        
        this.router.navigate([''])
    })
    }
  }

  getFullComponyData(){
    const tocken =localStorage.getItem('token')
    if(tocken){
      this.router.navigate(['/client/userLandPage'])
    }else{
      this.router.navigate(['/auth/login'])
    }
  }

  goToService(){
    this.router.navigate(['/aboutUs']).then(()=>{
      this.scrollToService()
    })
  }
  
  scrollToService() {
    const serviceSection = document.getElementById('services');
    if (serviceSection) {
      serviceSection.scrollIntoView();
    }
}

}
