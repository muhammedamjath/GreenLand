import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeContractorComponent } from "./components/contractor/home-contractor/home-contractor.component";

const routes:Routes=[
    {path:'contractorHome',component:HomeContractorComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class ClientRoutingModule{}