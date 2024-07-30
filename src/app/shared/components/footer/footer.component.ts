import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {}


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
