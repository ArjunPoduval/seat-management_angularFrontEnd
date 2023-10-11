import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { timeout } from 'rxjs';
import { MeetingroomDTO } from 'src/api/models';
import {
  AssetTypeService,
  AssetsService,
  FacilitiesService,
  MeetingroomService,
} from 'src/api/services';

@Component({
  selector: 'app-meetingrooms',
  templateUrl: './meetingrooms.component.html',
  styleUrls: ['./meetingrooms.component.scss'],
})
export class MeetingroomsComponent {
  public form: any;
  public onboard: boolean = true;
  public facilityList: {
    facilityId: number;
    facilityName: string;
  }[] = [];
  public assetList: any[] = [];
  public meetingRoomList: {
    meetingRoomId: number;
    meetingRoomNumber: number;
    facilityId: number;
  }[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly facilityService: FacilitiesService,
    private readonly assetService: AssetsService,
    private readonly meetingRoomService: MeetingroomService,
    private readonly assetTypeService: AssetTypeService
  ) {
    this.generateForm();
    this.loadFacilityDetails();
  }

  private loadMeetingRoomDetails() {
    this.meetingRoomService
      .getApiMeetingroom()
      .subscribe((value) => (this.meetingRoomList = value || []));
  }

  private loadFacilityDetails() {
    this.facilityService.getApiFacilities().subscribe((value) => {
      this.loadMeetingRoomDetails();
      return (this.facilityList = value || []);
    });
  }

  private generateForm() {
    this.form = this.formBuilder.group({
      meetingRoomNumber: [null,[Validators.required, Validators.pattern(/^[^e]+$/)]],
      totalSeats: [null,[Validators.required, Validators.pattern(/^[^e]+$/)]],
      facilityId: null,
      assetIndexId: null,
      meetingRoomId: null,
    });
  }

  createMeetingRoom() {
    const data = this.form.value;
    const request: MeetingroomDTO = {
      meetingRoomNumber: data.meetingRoomNumber,
      facilityId: data.facilityId,
      totalSeats: data.totalSeats,
    };
    this.meetingRoomService.postApiMeetingroom(request).subscribe({
      next: () => {
        window.alert('Success');
      },
      error: (errorDetails) => {
        window.alert(errorDetails?.error.Message);
      },
    });
    this.generateForm();
  }
  onboardMeetingroomPage() {
    this.onboard = true;
  }

  updateAssetPage() {
    this.onboard = false;
    this.assetTypeService.getApiAssetType().subscribe(() => {
      this.loadAssetList();
    });
  }

  private loadAssetList() {
    this.assetService.getApiAssets().subscribe((value) => {
      this.assetList = value || [];
    });
  }

  updateAsset() {
    const data = this.form.value;
    if (data.assetIndexId !== undefined) {
      this.assetService
        .patchApiAssetsAssetindexid({
          assetindexid: data.assetIndexId,
          meetingRoomId: data.meetingRoomId,
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
