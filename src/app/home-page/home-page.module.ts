import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePageComponent } from './home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacilityComponent } from './facility/facility.component';
import { CabinsComponent } from './cabins/cabins.component';
import { EmployeesComponent } from './employees/employees.component';
import { SeatsComponent } from './seats/seats.component';
import { MeetingroomsComponent } from './meetingrooms/meetingrooms.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationService } from '../notification.service';

@NgModule({
  declarations: [
    FacilityComponent,
    CabinsComponent,
    EmployeesComponent,
    MeetingroomsComponent,
    ReportsComponent,
    SeatsComponent,
    HomePageComponent
  ],
  imports: [CommonModule, HomePageRoutingModule, ReactiveFormsModule],
  exports: [HomePageComponent],
  providers:[NotificationService]
})
export class HomePageModule {}
