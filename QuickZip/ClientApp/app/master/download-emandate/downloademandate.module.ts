import { NgModule } from '@angular/core';
import { DownloadEmandateComponent } from './download-emandate.component';
import { CommonModule } from '@angular/common';
import { DownloademandateRoutingModule } from './downloademandate-routing.module';

@NgModule({
    declarations: [DownloadEmandateComponent],
  imports: [
      CommonModule,
    DownloademandateRoutingModule
  ]
})
export class DownloademandateModule { }
