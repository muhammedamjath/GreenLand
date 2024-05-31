import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ButtonComponent,
    InputComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent
  ]

})
export class SharedModule { }
