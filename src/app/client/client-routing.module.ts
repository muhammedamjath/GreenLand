import { Component, NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeContractorComponent } from "./components/contractor/home-contractor/home-contractor.component";
import { ComponyRegComponent } from "./components/contractor/compony-reg/compony-reg.component";
import { UpdateComponyComponent } from "./components/contractor/update-compony/update-compony.component";
import { RegisterdComponysComponent } from "./components/contractor/registerd-componys/registerd-componys.component";


const routes:Routes=[
    {path:'contractorHome',component:HomeContractorComponent},
    {path:'componyReg',component:ComponyRegComponent},
    {path:'updateCompony',component:UpdateComponyComponent},
    {path:'registerdComponys',component:RegisterdComponysComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class ClientRoutingModule{}