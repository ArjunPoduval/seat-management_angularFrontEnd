import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacilityDTO } from 'src/api/models';
import { BuildingService, FacilitiesService } from 'src/api/services';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss'],
})
export class FacilityComponent implements OnInit {
  public form: any;
  public buildingList: {
    buildingId:number,
    buildingName: string
  }[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly buildingService: BuildingService,
    private readonly facilityService: FacilitiesService
  ) {
    this.buildingService
      .getApiBuilding()
      .subscribe((value) => (this.buildingList = value || []));
    this.generateForm();
  }

  private generateForm() {
    this.form = this.formBuilder.group({
      building: null,
      floor: [0,[Validators.required, Validators.pattern(/^[^e]+$/)]],
      facilityName: '',
    });
  }

  ngOnInit() {}

  createFacility() {
    const data = this.form.value;
    const request: FacilityDTO = {
      buildingId: data.building,
      facilityName: data.facilityName,
      floor: data.floor,
    };
    this.facilityService.postApiFacilities(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails?.error);
      }
    });
    this.generateForm();

  }
}
