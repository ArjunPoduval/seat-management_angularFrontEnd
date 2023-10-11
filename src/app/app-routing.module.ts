import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationService } from './notification.service';
const routes: Routes = [

 { path: '',
 loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[NotificationService]
})
export class AppRoutingModule { }
