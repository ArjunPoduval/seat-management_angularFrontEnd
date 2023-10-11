import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CabinDTO } from 'src/api/models';
import {
  CabinService,
  EmployeeService,
  FacilitiesService,
} from 'src/api/services';

@Component({
  selector: 'app-cabins',
  templateUrl: './cabins.component.html',
  styleUrls: ['./cabins.component.scss'],
})
export class CabinsComponent {
  public form: any;
  public facilityList: {
    facilityId: number;
    facilityName: string;
  }[] = [];
  public cabinList: {
    cabinId: number;
    cabinNumber: number;
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
    private readonly employeeService: EmployeeService,
    private readonly cabinService: CabinService
  ) {
    this.generateForm();
    this.cabinDetails();
  }

  private employeeDetails() {
    this.employeeService.getApiEmployee().subscribe((value) => {
      this.employeeList = value || [];
    });
  }

  private cabinDetails() {
    this.facilityService.getApiFacilities().subscribe((value) => {
      this.employeeDetails();
      this.facilityList = value || [];
    });
  }

  private generateForm() {
    this.form = this.formBuilder.group({
      cabinNumber: [null,[Validators.required, Validators.pattern(/^[^e]+$/)]],
      facilityId: null,
      employeeId: null,
      cabinId: null,
    });
  }
  onboardCabinPage() {
    this.onboard = true;
    this.generateForm();
  }
  updateCabinPage() {
    this.onboard = false;

    this.cabinService
      .getApiCabin()
      .subscribe((value) => (this.cabinList = value || []));
    this.generateForm();
  }

  createCabin() {
    const data = this.form.value;
    const request: CabinDTO = {
      cabinNumber: data.cabinNumber,
      facilityId: data.facilityId,
    };
    this.cabinService.postApiCabin(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails?.error.Message);
      },
    });
    this.generateForm();
  }
  updateCabin() {
    const data = this.form.value;
    if (data.cabinId !== undefined) {
      this.cabinService
        .patchApiCabinCabinId({
          cabinId: data.cabinId,
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
