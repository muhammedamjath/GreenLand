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
  category:any

  ngOnInit(): void {
    this.homeService.getComponys().subscribe((res)=>{
      this.componyData=res      
    })

    const token = localStorage.getItem('token')
    const category = localStorage.getItem('category')
    this.category = category
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

  getFullComponyData(){
    const category =localStorage.getItem('category')
    if(category == 'user'){
      this.router.navigate(['/client/userLandPage'])
    }else if(category == 'contractor'){
      this.router.navigate([''])
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
