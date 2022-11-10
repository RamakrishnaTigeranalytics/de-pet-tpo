import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './shared/layout/empty/empty.component';
import { BasicComponent } from './shared/layout/basic/basic.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { AdminGuard } from './core/guards/admin/admin.guard';
import { LandingDashboardComponent } from './features/landing/landing-dashboard/landing-dashboard.component';
import { LandingHomeComponent } from './features/landing/landing-home/landing-home.component';
import { ComparisonDialogComponent } from './features/landing/landing-dashboard/comparison-dialog/comparison-dialog.component'
import { ScenarioPlannerComponent } from './features/planner/scenario-planner/scenario-planner.component';
import { FindcheckboxComponent } from './features/planner/scenario-planner/findcheckbox/findcheckbox.component';

const routes: Routes = [
  {
    path: 'auth',
    component: EmptyComponent,
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule),
  },

  // Landing routes
  {
    path: '',
    component: BasicComponent,
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
    //canActivate: [AuthGuard],
  },

  {
    path: 'admin',
    component: BasicComponent,
    loadChildren: () =>
      import('./features/admin/admin.module').then(m => m.AdminModule),
    //canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'landing',
    component: BasicComponent,
    loadChildren: () =>
      import('./features/landing/landing.module').then(m => m.LandingModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'landing',
    component: BasicComponent,
    loadChildren: () =>
      import('./features/landing/landing.module').then(m => m.LandingModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'landing/dashboard/comparison',
    component: ComparisonDialogComponent,
    loadChildren: () =>
      import('./features/landing/landing.module').then(m => m.LandingModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'planner/scenario',
    component: ScenarioPlannerComponent,
    loadChildren: () =>
      import('./features/planner/planner.module').then(m => m.PlannerModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'planner/scenario/check',
    component: FindcheckboxComponent,
    loadChildren: () =>
      import('./features/planner/planner.module').then(m => m.PlannerModule),
    //canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'landing/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
