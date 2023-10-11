/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CabinDTO } from '../models/cabin-dto';
@Injectable({
  providedIn: 'root',
})
class CabinService extends __BaseService {
  static readonly getApiCabinPath = '/api/Cabin';
  static readonly postApiCabinPath = '/api/Cabin';
  static readonly patchApiCabinCabinIdPath = '/api/Cabin/{cabinId}';
  static readonly deleteApiCabinCabinIdPath = '/api/Cabin/{cabinId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiCabinResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Cabin`,
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
  }  getApiCabin(): __Observable<null> {
    return this.getApiCabinResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiCabinResponse(body?: CabinDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Cabin`,
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
  postApiCabin(body?: CabinDTO): __Observable<null> {
    return this.postApiCabinResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CabinService.PatchApiCabinCabinIdParams` containing the following parameters:
   *
   * - `cabinId`:
   *
   * - `employeeId`:
   */
  patchApiCabinCabinIdResponse(params: CabinService.PatchApiCabinCabinIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.employeeId != null) __params = __params.set('employeeId', params.employeeId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Cabin/${encodeURIComponent(String(params.cabinId))}`,
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
   * @param params The `CabinService.PatchApiCabinCabinIdParams` containing the following parameters:
   *
   * - `cabinId`:
   *
   * - `employeeId`:
   */
  patchApiCabinCabinId(params: CabinService.PatchApiCabinCabinIdParams): __Observable<null> {
    return this.patchApiCabinCabinIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param cabinId undefined
   */
  deleteApiCabinCabinIdResponse(cabinId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Cabin/${encodeURIComponent(String(cabinId))}`,
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
   * @param cabinId undefined
   */
  deleteApiCabinCabinId(cabinId: number): __Observable<null> {
    return this.deleteApiCabinCabinIdResponse(cabinId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CabinService {

  /**
   * Parameters for patchApiCabinCabinId
   */
  export interface PatchApiCabinCabinIdParams {
    cabinId: number;
    employeeId?: number;
  }
}

export { CabinService }
