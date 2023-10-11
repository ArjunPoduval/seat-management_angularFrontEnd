/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AssetCreationDTO } from '../models/asset-creation-dto';
@Injectable({
  providedIn: 'root',
})
class AssetsService extends __BaseService {
  static readonly getApiAssetsPath = '/api/Assets';
  static readonly postApiAssetsPath = '/api/Assets';
  static readonly patchApiAssetsAssetindexidPath = '/api/Assets/{assetindexid}';
  static readonly deleteApiAssetsAssetindexidPath = '/api/Assets/{assetindexid}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiAssetsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Assets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  getApiAssets(): __Observable<null> {
    return this.getApiAssetsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiAssetsResponse(body?: AssetCreationDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Assets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiAssets(body?: AssetCreationDTO): __Observable<null> {
    return this.postApiAssetsResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AssetsService.PatchApiAssetsAssetindexidParams` containing the following parameters:
   *
   * - `assetindexid`:
   *
   * - `meetingRoomId`:
   */
  patchApiAssetsAssetindexidResponse(params: AssetsService.PatchApiAssetsAssetindexidParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.meetingRoomId != null) __params = __params.set('meetingRoomId', params.meetingRoomId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Assets/${encodeURIComponent(String(params.assetindexid))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AssetsService.PatchApiAssetsAssetindexidParams` containing the following parameters:
   *
   * - `assetindexid`:
   *
   * - `meetingRoomId`:
   */
  patchApiAssetsAssetindexid(params: AssetsService.PatchApiAssetsAssetindexidParams): __Observable<null> {
    return this.patchApiAssetsAssetindexidResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param assetindexid undefined
   */
  deleteApiAssetsAssetindexidResponse(assetindexid: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Assets/${encodeURIComponent(String(assetindexid))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param assetindexid undefined
   */
  deleteApiAssetsAssetindexid(assetindexid: number): __Observable<null> {
    return this.deleteApiAssetsAssetindexidResponse(assetindexid).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AssetsService {

  /**
   * Parameters for patchApiAssetsAssetindexid
   */
  export interface PatchApiAssetsAssetindexidParams {
    assetindexid: number;
    meetingRoomId?: number;
  }
}

export { AssetsService }
