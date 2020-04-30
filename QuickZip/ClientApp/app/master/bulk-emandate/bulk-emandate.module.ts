import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkEmandateComponent } from './bulk-emandate.component';
import { BulkEmandateRoutingModule } from './bulk-emandate-routing.module';
import { BuldEmandateService } from '../../../app/Services/BulkEMandate/buld-emandate.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [BulkEmandateComponent],
  imports: [
    CommonModule,
      BulkEmandateRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers: [BuldEmandateService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
})
export class BulkEmandateModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

