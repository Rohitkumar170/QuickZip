/// <reference path="../../services/downloadmandate/downloadmandate.service.ts" />
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadmandateComponent } from './downloadmandate.component';
import { CommonModule } from '@angular/common';

import { DownloadmandateRoutingModule } from './downloadmandate-routing.module';
import { DownloadmandateService } from '../../services/downloadmandate/downloadmandate.service';


@NgModule({
    declarations: [DownloadmandateComponent],
  imports: [
      CommonModule,
      ReactiveFormsModule, FormsModule,
      DownloadmandateRoutingModule
    ],
    providers:[DownloadmandateService]
})
export class DownloadmandateModule { }
