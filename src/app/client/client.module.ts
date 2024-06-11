import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContractorComponent } from './components/contractor/home-contractor/home-contractor.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponyRegComponent } from './components/compony-reg/compony-reg.component';



@NgModule({
  declarations: [
    HomeContractorComponent,
    ComponyRegComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
