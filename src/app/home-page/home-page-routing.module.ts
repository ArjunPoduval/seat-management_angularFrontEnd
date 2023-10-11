import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { FacilityComponent } from './facility/facility.component';
import { SeatsComponent } from './seats/seats.component';
import { MeetingroomsComponent } from './meetingrooms/meetingrooms.component';
import { CabinsComponent } from './cabins/cabins.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'facilities', component: FacilityComponent },
  { path: 'seats', component: SeatsComponent },
  { path: 'meetingrooms', component: MeetingroomsComponent },
  { path: 'cabins', component: CabinsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/facilities', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
