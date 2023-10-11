/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EmployeeDTO } from '../models/employee-dto';
@Injectable({
  providedIn: 'root',
})
class EmployeeService extends __BaseService {
  static readonly getApiEmployeePath = '/api/Employee';
  static readonly postApiEmployeePath = '/api/Employee';
  static readonly deleteApiEmployeeIdPath = '/api/Employee/{id}';
  static readonly patchApiEmployeeIdPath = '/api/Employee/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiEmployeeResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Employee`,
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
  }  getApiEmployee(): __Observable<null> {
    return this.getApiEmployeeResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiEmployeeResponse(body?: EmployeeDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Employee`,
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
  postApiEmployee(body?: EmployeeDTO): __Observable<null> {
    return this.postApiEmployeeResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  deleteApiEmployeeIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Employee/${encodeURIComponent(String(id))}`,
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
  deleteApiEmployeeId(id: number): __Observable<null> {
    return this.deleteApiEmployeeIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmployeeService.PatchApiEmployeeIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  patchApiEmployeeIdResponse(params: EmployeeService.PatchApiEmployeeIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Employee/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `EmployeeService.PatchApiEmployeeIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  patchApiEmployeeId(params: EmployeeService.PatchApiEmployeeIdParams): __Observable<null> {
    return this.patchApiEmployeeIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmployeeService {

  /**
   * Parameters for patchApiEmployeeId
   */
  export interface PatchApiEmployeeIdParams {
    id: number;
    body?: EmployeeDTO;
  }
}

export { EmployeeService }
