/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MeetingroomDTO } from '../models/meetingroom-dto';
@Injectable({
  providedIn: 'root',
})
class MeetingroomService extends __BaseService {
  static readonly getApiMeetingroomPath = '/api/Meetingroom';
  static readonly postApiMeetingroomPath = '/api/Meetingroom';
  static readonly putApiMeetingroomIdPath = '/api/Meetingroom/{id}';
  static readonly deleteApiMeetingroomIdPath = '/api/Meetingroom/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  getApiMeetingroomResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Meetingroom`,
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
  }  getApiMeetingroom(): __Observable<null> {
    return this.getApiMeetingroomResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postApiMeetingroomResponse(body?: MeetingroomDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Meetingroom`,
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
  postApiMeetingroom(body?: MeetingroomDTO): __Observable<null> {
    return this.postApiMeetingroomResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `MeetingroomService.PutApiMeetingroomIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putApiMeetingroomIdResponse(params: MeetingroomService.PutApiMeetingroomIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Meetingroom/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `MeetingroomService.PutApiMeetingroomIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putApiMeetingroomId(params: MeetingroomService.PutApiMeetingroomIdParams): __Observable<null> {
    return this.putApiMeetingroomIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  deleteApiMeetingroomIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Meetingroom/${encodeURIComponent(String(id))}`,
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
  deleteApiMeetingroomId(id: number): __Observable<null> {
    return this.deleteApiMeetingroomIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MeetingroomService {

  /**
   * Parameters for putApiMeetingroomId
   */
  export interface PutApiMeetingroomIdParams {
    id: number;
    body?: MeetingroomDTO;
  }
}

export { MeetingroomService }
