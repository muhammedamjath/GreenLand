import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeContractorComponent } from "./components/contractor/home-contractor/home-contractor.component";
import { ComponyRegComponent } from "./components/compony-reg/compony-reg.component";

const routes:Routes=[
    {path:'contractorHome',component:HomeContractorComponent},
    {path:'componyReg',component:ComponyRegComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class ClientRoutingModule{}