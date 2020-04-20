import { NgModule } from '@angular/core';
import { DownloadoldmandateComponent } from './downloadoldmandate.component';
import { CommonModule } from '@angular/common';
import { DownloadoldmandateRoutingModule } from './downloadoldmandate-routing.module';

@NgModule({
    declarations: [DownloadoldmandateComponent],
  imports: [
      CommonModule,
    DownloadoldmandateRoutingModule
  ]
})
export class DownloadoldmandateModule { }
