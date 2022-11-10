import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingDashboardComponent } from './landing-dashboard/landing-dashboard.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';


const routes: Routes = [
    {
      path: 'dashboard',
      component: LandingDashboardComponent,
     // resolve: { data: AdminResolver },
    },
    { path: 'home', component: LandingHomeComponent },
    { path: '', component: LandingDashboardComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LandRoutingModule {}
