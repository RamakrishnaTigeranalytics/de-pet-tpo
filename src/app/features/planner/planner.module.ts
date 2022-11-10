import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ScenarioPlannerComponent } from './scenario-planner/scenario-planner.component';
import { FindcheckboxComponent } from './scenario-planner/findcheckbox/findcheckbox.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ScenarioPlannerComponent,
    FindcheckboxComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    AuthModule,
    MatTabsModule,
    MatTableModule,
    //TalibLoadingBarModule,
    //TalibAlertModule,
    //SearchModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
    // AppRoutingModule,
    //PlannerRoutingModule,
  ],
  providers: [
    DatePipe,
    MatDatepickerModule
  ]
})
export class PlannerModule { }
