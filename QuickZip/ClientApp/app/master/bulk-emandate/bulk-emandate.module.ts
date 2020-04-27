import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkEmandateComponent } from './bulk-emandate.component';
import { BulkEmandateRoutingModule } from './bulk-emandate-routing.module';

@NgModule({
    declarations: [BulkEmandateComponent],
  imports: [
    CommonModule,
    BulkEmandateRoutingModule
  ]
})
export class BulkEmandateModule { }

