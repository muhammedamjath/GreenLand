import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContractorComponent } from './components/contractor/home-contractor/home-contractor.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponyRegComponent } from './components/contractor/compony-reg/compony-reg.component';
import { UpdateComponyComponent } from './components/contractor/update-compony/update-compony.component';
import { RegisterdComponysComponent } from './components/contractor/registerd-componys/registerd-componys.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/user/landing-page/landing-page.component';



@NgModule({
  declarations: [
    HomeContractorComponent,
    ComponyRegComponent,
    UpdateComponyComponent,
    RegisterdComponysComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
