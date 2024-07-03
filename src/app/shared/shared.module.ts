import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponyRegistrationComponent } from './components/compony registration form/compony-registration.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';



@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    ComponyRegistrationComponent,
    UserNavComponent,
    NotificationsComponent,
    ChatComponent,
    ChatListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    ComponyRegistrationComponent,
    UserNavComponent
  ],
  

})
export class SharedModule { }
