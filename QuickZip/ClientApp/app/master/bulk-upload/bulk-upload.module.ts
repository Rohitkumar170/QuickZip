import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkUploadComponent } from './bulk-upload.component';
import { BulkUploadRoutingModule } from './bulk-upload-routing.module';

@NgModule({
    declarations: [BulkUploadComponent],
  imports: [
    CommonModule,
    BulkUploadRoutingModule
  ]
})
export class BulkUploadModule { }
