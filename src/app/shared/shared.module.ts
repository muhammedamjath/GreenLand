import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponyRegistrationComponent } from './components/compony registration form/compony-registration.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    ComponyRegistrationComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    ComponyRegistrationComponent,
    ChatComponent
  ]

})
export class SharedModule { }
