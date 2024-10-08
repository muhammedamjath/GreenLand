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
import { WorkHistoryComponent } from './components/user/work-history/work-history.component';
import { HistoryComponent } from './components/contractor/history/history.component';
import { WorkFullViewComponent } from './components/user/work-full-view/work-full-view.component';
import { SingleworkViewComponent } from './components/contractor/singlework-view/singlework-view.component';
import { StarRatingComponent } from './components/user/star-rating/star-rating.component';
import { AboutUsComponent } from './components/common/about-us/about-us.component';
import { AnimationHomeComponent } from './components/common/animation-home/animation-home.component';




@NgModule({
  declarations: [
    HomeContractorComponent,
    ComponyRegComponent,
    UpdateComponyComponent,
    RegisterdComponysComponent,
    LandingPageComponent,
    DetailedComponyViewComponent,
    WorkHistoryComponent,
    HistoryComponent,
    WorkFullViewComponent,
    SingleworkViewComponent,
    StarRatingComponent,
    AboutUsComponent,
    AnimationHomeComponent
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
