import { NgModule } from '@angular/core';
import { DownloadmandateComponent } from './downloadmandate.component';
import { CommonModule } from '@angular/common';
import { DownloadmandateRoutingModule } from './downloadmandate-routing.module';

@NgModule({
    declarations: [DownloadmandateComponent],
  imports: [
      CommonModule,
    DownloadmandateRoutingModule
  ]
})
export class DownloadmandateModule { }
