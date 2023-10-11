/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SeatManagementApiConfiguration, SeatManagementApiConfigurationInterface } from './seat-management-api-configuration';

import { AssetsService } from './services/assets.service';
import { AssetTypeService } from './services/asset-type.service';
import { BuildingService } from './services/building.service';
import { CabinService } from './services/cabin.service';
import { CityService } from './services/city.service';
import { DepartmentService } from './services/department.service';
import { EmployeeService } from './services/employee.service';
import { FacilitiesService } from './services/facilities.service';
import { MeetingroomService } from './services/meetingroom.service';
import { SeatService } from './services/seat.service';
import { UserAuthService } from './services/user-auth.service';

/**
 * Provider for all seat-management-api services, plus SeatManagementApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SeatManagementApiConfiguration,
    AssetsService,
    AssetTypeService,
    BuildingService,
    CabinService,
    CityService,
    DepartmentService,
    EmployeeService,
    FacilitiesService,
    MeetingroomService,
    SeatService,
    UserAuthService
  ],
})
export class SeatManagementApiModule {
  static forRoot(customParams: SeatManagementApiConfigurationInterface): ModuleWithProviders<SeatManagementApiModule> {
    return {
      ngModule: SeatManagementApiModule,
      providers: [
        {
          provide: SeatManagementApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
