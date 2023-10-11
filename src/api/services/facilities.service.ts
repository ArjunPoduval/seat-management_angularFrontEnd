/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FacilityDTO } from '../models/facility-dto';
@Injectable({
  providedIn: 'root',
})
class FacilitiesService extends __BaseService {
  static readonly getApiFacilitiesPath = '/api/Facilities';
  static readonly postApiFacilitiesPath = '/api/Facilities';
  static readonly deleteApiFacilitiesFacilityIdPath = '/api/Facilities/{facilityId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiFacilitiesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Facilities`,
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
  }  getApiFacilities(): __Observable<null> {
    return this.getApiFacilitiesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiFacilitiesResponse(body?: FacilityDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Facilities`,
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
  postApiFacilities(body?: FacilityDTO): __Observable<null> {
    return this.postApiFacilitiesResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param facilityId undefined
   */
  deleteApiFacilitiesFacilityIdResponse(facilityId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Facilities/${encodeURIComponent(String(facilityId))}`,
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
   * @param facilityId undefined
   */
  deleteApiFacilitiesFacilityId(facilityId: number): __Observable<null> {
    return this.deleteApiFacilitiesFacilityIdResponse(facilityId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module FacilitiesService {
}

export { FacilitiesService }
