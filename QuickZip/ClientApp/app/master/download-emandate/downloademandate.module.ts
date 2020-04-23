import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadEmandateComponent } from './download-emandate.component';
import { CommonModule } from '@angular/common';
import { DownloademandateRoutingModule } from './downloademandate-routing.module';
import { DownloadEmandateServiceService } from '../../services/downloademandate/download-emandate-service.service';
@NgModule({
    declarations: [DownloadEmandateComponent],
  imports: [
      CommonModule,
      DownloademandateRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers: [DownloadEmandateServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
})
export class DownloademandateModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
