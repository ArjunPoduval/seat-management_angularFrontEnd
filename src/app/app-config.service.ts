import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SeatManagementApiConfiguration } from 'src/api/seat-management-api-configuration';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly httpClient: HttpClient;


  constructor(
    private readonly handler: HttpBackend,
    private readonly seatManagementApiConfiguration: SeatManagementApiConfiguration,
  ) {
    this.httpClient = new HttpClient(this.handler);
  }

  loadConfig() {
    return this.httpClient.get('../assets/config.json').pipe(
      map((value) => {
        this.seatManagementApiConfiguration.rootUrl = (value as any)?.serverUrl;
        return value;
      })
    );
  }
}
