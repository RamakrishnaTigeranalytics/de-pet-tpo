import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatSidenavModule} from '@angular/material/sidenav';
//import { TalibCardModule } from 'src/@talib/components/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { LandingDashboardComponent } from './landing-dashboard/landing-dashboard.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { ComparisonDialogComponent } from './landing-dashboard/comparison-dialog/comparison-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LandRoutingModule } from './land-routing.module';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [
    LandingDashboardComponent,
    LandingHomeComponent,
    ComparisonDialogComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    IvyCarouselModule,
    NgApexchartsModule,
    MatSidenavModule,
    //TalibCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    LandRoutingModule,
    IonicModule
  ]
})
export class LandingModule { }
