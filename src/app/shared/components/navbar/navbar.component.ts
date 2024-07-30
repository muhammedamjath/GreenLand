import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(private router: Router) {}

  goToContactSection() {
    this.router.navigate(['/']).then(() => {
      this.scrollToContactSection();
    });
  }

   scrollToContactSection() {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
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
  btnStyle:string='flex  ml-4 mt-2 font-bold items-center hidden sm:block'
  
  menuBtnIcon:string='fa-solid fa-bars'
  
  

}
