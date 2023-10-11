/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SeatDTO } from '../models/seat-dto';
import { SeatAllocationReportRequest } from '../models/seat-allocation-report-request';
@Injectable({
  providedIn: 'root',
})
class SeatService extends __BaseService {
  static readonly getApiSeatPath = '/api/Seat';
  static readonly postApiSeatPath = '/api/Seat';
  static readonly patchApiSeatSeatIdPath = '/api/Seat/{seatId}';
  static readonly deleteApiSeatIdPath = '/api/Seat/{id}';
  static readonly postApiSeatReportsPath = '/api/Seat/reports';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiSeatResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Seat`,
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
  }  getApiSeat(): __Observable<null> {
    return this.getApiSeatResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiSeatResponse(body?: SeatDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Seat`,
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
  postApiSeat(body?: SeatDTO): __Observable<null> {
    return this.postApiSeatResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `SeatService.PatchApiSeatSeatIdParams` containing the following parameters:
   *
   * - `seatId`:
   *
   * - `employeeId`:
   */
  patchApiSeatSeatIdResponse(params: SeatService.PatchApiSeatSeatIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.employeeId != null) __params = __params.set('employeeId', params.employeeId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Seat/${encodeURIComponent(String(params.seatId))}`,
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
   * @param params The `SeatService.PatchApiSeatSeatIdParams` containing the following parameters:
   *
   * - `seatId`:
   *
   * - `employeeId`:
   */
  patchApiSeatSeatId(params: SeatService.PatchApiSeatSeatIdParams): __Observable<null> {
    return this.patchApiSeatSeatIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  deleteApiSeatIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Seat/${encodeURIComponent(String(id))}`,
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
   * @param id undefined
   */
  deleteApiSeatId(id: number): __Observable<null> {
    return this.deleteApiSeatIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiSeatReportsResponse(body?: SeatAllocationReportRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Seat/reports`,
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
  postApiSeatReports(body?: SeatAllocationReportRequest): __Observable<null> {
    return this.postApiSeatReportsResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SeatService {

  /**
   * Parameters for patchApiSeatSeatId
   */
  export interface PatchApiSeatSeatIdParams {
    seatId: number;
    employeeId?: number;
  }
}

export { SeatService }
