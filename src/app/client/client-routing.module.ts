import { Component, NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeContractorComponent } from "./components/contractor/home-contractor/home-contractor.component";
import { ComponyRegComponent } from "./components/contractor/compony-reg/compony-reg.component";
import { UpdateComponyComponent } from "./components/contractor/update-compony/update-compony.component";
import { RegisterdComponysComponent } from "./components/contractor/registerd-componys/registerd-componys.component";
import { LandingPageComponent } from "./components/user/landing-page/landing-page.component";
import { DetailedComponyViewComponent } from "./components/user/detailed-compony-view/detailed-compony-view.component";
import { ChatComponent } from "../shared/components/chat/chat.component";
import { WorkHistoryComponent } from "./components/user/work-history/work-history.component";
import { HistoryComponent } from "./components/contractor/history/history.component";
import { WorkFullViewComponent } from "./components/user/work-full-view/work-full-view.component";
import { SingleworkViewComponent } from "./components/contractor/singlework-view/singlework-view.component";
import { contractorGuard } from "../guards/contractor.guard";
import { userGuard } from "../guards/user.guard";


const routes:Routes=[
    {path:'contractorHome', component:HomeContractorComponent,canActivate:[contractorGuard]},
    {path:'componyReg', component:ComponyRegComponent,canActivate:[contractorGuard]},
    {path:'updateCompony/:id', component:UpdateComponyComponent,canActivate:[contractorGuard]},
    {path:'registerdComponys' ,component:RegisterdComponysComponent,canActivate:[contractorGuard]},
    {path:'userLandPage' ,component:LandingPageComponent,canActivate:[userGuard]},
    {path:'detailedView/:id', component:DetailedComponyViewComponent,canActivate:[userGuard]},
    {path:'chat/:id/:componyId',component:ChatComponent},
    {path:'userHistory',component:WorkHistoryComponent,canActivate:[userGuard]},
    {path:'contractorHistory',component:HistoryComponent,canActivate:[contractorGuard]},
    {path:'detailWorkView/:id',component:WorkFullViewComponent,canActivate:[userGuard]},
    {path:'singleworkView/:id',component:SingleworkViewComponent,canActivate:[contractorGuard]},
    
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class ClientRoutingModule{}