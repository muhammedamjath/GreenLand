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


const routes:Routes=[
    {path:'contractorHome', component:HomeContractorComponent},
    {path:'componyReg', component:ComponyRegComponent},
    {path:'updateCompony/:id', component:UpdateComponyComponent},
    {path:'registerdComponys' ,component:RegisterdComponysComponent},
    {path:'userLandPage' ,component:LandingPageComponent},
    {path:'detailedView/:id', component:DetailedComponyViewComponent},
    {path:'chat/:id/:componyId',component:ChatComponent},
    {path:'userHistory',component:WorkHistoryComponent},
    {path:'contractorHistory',component:HistoryComponent},
    {path:'detailWorkView/:id',component:WorkFullViewComponent},
    {path:'singleworkView/:id',component:SingleworkViewComponent}
    
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class ClientRoutingModule{}