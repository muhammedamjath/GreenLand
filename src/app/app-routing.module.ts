import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './client/components/common/home/home.component';
import { clientGuard } from './guards/client.guard';
import { AboutUsComponent } from './client/components/common/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'aboutUs' ,component:AboutUsComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path:'client',
    loadChildren:()=>
      import('./client/client.module').then((m)=> m.ClientModule),canActivate:[clientGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
