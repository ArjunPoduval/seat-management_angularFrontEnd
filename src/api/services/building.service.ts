/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BuildingDTO } from '../models/building-dto';
@Injectable({
  providedIn: 'root',
})
class BuildingService extends __BaseService {
  static readonly getApiBuildingPath = '/api/Building';
  static readonly postApiBuildingPath = '/api/Building';
  static readonly deleteApiBuildingBuildingIdPath = '/api/Building/{buildingId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiBuildingResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Building`,
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
  }  getApiBuilding(): __Observable<null> {
    return this.getApiBuildingResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiBuildingResponse(body?: BuildingDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Building`,
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
  postApiBuilding(body?: BuildingDTO): __Observable<null> {
    return this.postApiBuildingResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param buildingId undefined
   */
  deleteApiBuildingBuildingIdResponse(buildingId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Building/${encodeURIComponent(String(buildingId))}`,
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
   * @param buildingId undefined
   */
  deleteApiBuildingBuildingId(buildingId: number): __Observable<null> {
    return this.deleteApiBuildingBuildingIdResponse(buildingId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module BuildingService {
}

export { BuildingService }
