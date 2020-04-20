import { NgModule } from '@angular/core';
import { UmrnuploadComponent } from './umrnupload.component';
import { CommonModule } from '@angular/common';
import { UmrnUploadRoutingModule } from './umrn-upload-routing.module';

@NgModule({
    declarations: [UmrnuploadComponent],
  imports: [
      CommonModule,
    UmrnUploadRoutingModule
  ]
})
export class UmrnUploadModule { }
