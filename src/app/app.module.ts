import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeatManagementApiModule } from 'src/api/seat-management-api.module';
import { AppConfigService } from './app-config.service';
import { HomePageModule } from './home-page/home-page.module';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SeatManagementApiModule,
    HomePageModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Toast timeout in milliseconds (optional)
      positionClass: 'toast-top-right', // Toast position (optional)
      preventDuplicates: true, // Prevent duplicate toasts (optional)
    }),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (app: AppConfigService) => () => app.loadConfig().toPromise(),
      multi: true,
      deps: [AppConfigService],
    },
    NotificationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
