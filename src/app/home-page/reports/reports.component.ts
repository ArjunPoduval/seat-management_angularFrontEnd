import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SeatAllocationReportRequest } from 'src/api/models';
import {
  BuildingService,
  CityService,
  FacilitiesService,
  SeatService,
} from 'src/api/services';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  public form!: any;
  public reportGenerated: boolean = false;
  public report: any[] = [];
  public cityList: {
    cityId: number;
    cityName: string;
  }[] = [];
  public buildingList: {
    cityId:number,
    buildingId: number;
    buildingName: string;
  }[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly seatService: SeatService,
    private readonly cityService: CityService,
    private readonly buildingService: BuildingService
  ) {
    this.loadCityData();
    this.generateForm();
  }

  private loadCityData() {
    this.cityService.getApiCity().subscribe((value) => {
      this.loadBuildingData();
      this.cityList = value || [];
    });
  }

  private loadBuildingData() {
    this.buildingService.getApiBuilding().subscribe((value) => {
      this.buildingList = value || [];
    });
  }

  private generateForm() {
    this.form = this.formBuilder.group({
      allocationType: ['', Validators.required],
      cityId: [0, Validators.required],
      buildingId: [0, Validators.required],
      floorNumber: [0, [Validators.required, Validators.pattern(/^[^e]+$/)]],
    });
    this.form.get('buildingId')?.disable();
    this.form.get('floorNumber')?.disable();

  }
  generateReport() {
    const data = this.form.value;
    const request: SeatAllocationReportRequest = {
      allocationType: data.allocationType,
      cityId: data.cityId,
      buildingId: data.buildingId,
      floorNumber: data.floorNumber,
    };
    if (request.allocationType != null) {
      this.seatService.postApiSeatReports(request).subscribe((value) => {
        this.report = value || [];
      });
      this.reportGenerated = true;
      this.generateForm();
    } else {
      window.alert('allocation type is required');
    }
  }
  onCitySelected(cityId: number) {
    this.form.get('buildingId')?.enable();
  }
  onBuildingSelected(buildingId:number){
    this.form.get('floorNumber')?.enable();
  }
}
