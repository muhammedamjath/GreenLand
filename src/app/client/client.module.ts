import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContractorComponent } from './components/contractor/home-contractor/home-contractor.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponyRegComponent } from './components/contractor/compony-reg/compony-reg.component';
import { UpdateComponyComponent } from './components/contractor/update-compony/update-compony.component';
import { RegisterdComponysComponent } from './components/contractor/registerd-componys/registerd-componys.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/user/landing-page/landing-page.component';
import { DetailedComponyViewComponent } from './components/user/detailed-compony-view/detailed-compony-view.component';



@NgModule({
  declarations: [
    HomeContractorComponent,
    ComponyRegComponent,
    UpdateComponyComponent,
    RegisterdComponysComponent,
    LandingPageComponent,
    DetailedComponyViewComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class ClientModule { }
