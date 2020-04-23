import { NgModule } from '@angular/core';
import { DownloadoldemandateComponent } from './downloadoldemandate.component';
import { CommonModule } from '@angular/common';
import { DownloadoledemandateRoutingModule } from './downloadoledemandate-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadoldemandateService } from '../../Services/downloadoldemandate/downloadoldemandate.service';

@NgModule({
    declarations: [DownloadoldemandateComponent],
  imports: [
      CommonModule,
      DownloadoledemandateRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers: [DownloadoldemandateService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
})
export class DownloadoledemandateModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

