import { NgModule } from '@angular/core';
import { DownloadoldemandateComponent } from './downloadoldemandate.component';
import { CommonModule } from '@angular/common';
import { DownloadoledemandateRoutingModule } from './downloadoledemandate-routing.module';

@NgModule({
    declarations: [DownloadoldemandateComponent],
  imports: [
      CommonModule,
    DownloadoledemandateRoutingModule
  ]
})
export class DownloadoledemandateModule { }
