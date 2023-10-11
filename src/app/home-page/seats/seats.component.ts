import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SeatDTO } from 'src/api/models';
import {
  EmployeeService,
  FacilitiesService,
  SeatService,
} from 'src/api/services';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
})
export class SeatsComponent {
  public form: any;
  public facilityList: {
    facilityId: number;
    facilityName: string;
  }[] = [];
  public seatList: {
    seatId: number;
    seatNumber: number;
    facilityId: number;
  }[] = [];
  public employeeList: {
    employeeId: number;
    employeeName: string;
  }[] = [];
  public onboard = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly facilityService: FacilitiesService,
    private readonly seatService: SeatService,
    private readonly employeeService: EmployeeService
  ) {
    this.facilityDetails();
    this.generateForm();
  }

  private facilityDetails() {
    this.facilityService.getApiFacilities().subscribe((value) => {
      this.employeeDetails();
      this.facilityList = value || [];
    });
  }

  private employeeDetails() {
    this.employeeService
      .getApiEmployee()
      .subscribe((value) => (this.employeeList = value || []));
  }

  private generateForm() {
    this.form = this.formBuilder.group({
      seatNumber: [null,[Validators.required, Validators.pattern(/^[^e]+$/)]],
      facilityId: null,
      seatId: null,
      employeeId: null,
    });
  }
  onboardSeatsPage() {
    this.onboard = true;
  }
  updateSeatsPage() {
    this.onboard = false;
    this.seatService
      .getApiSeat()
      .subscribe((value) => (this.seatList = value || []));
  }

  createSeat() {
    const data = this.form.value;
    const request: SeatDTO = {
      seatNumber: data.seatNumber,
      facilityId: data.facilityId,
    };
    this.seatService.postApiSeat(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails?.error.Message);
      },
    });
    this.generateForm();
  }
  updateSeat() {
    const data = this.form.value;
    if (data.seatId !== undefined) {
      this.seatService
        .patchApiSeatSeatId({
          seatId: data.seatId,
          employeeId: data.employeeId,
        })
        .subscribe({
          next: () => {
            window.alert('Success');
          },
          error: (errorDetails) => {
            window.alert(errorDetails?.error);
          },
        });
    } else {
      console.log('undefined');
    }
    this.generateForm();
  }
}
