import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadmandateComponent } from './downloadmandate.component';
import { CommonModule } from '@angular/common';
import { DownloadmandateRoutingModule } from './downloadmandate-routing.module';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';
@NgModule({
    declarations: [DownloadmandateComponent],
  imports: [
      CommonModule,
      DownloadmandateRoutingModule, FormsModule, ReactiveFormsModule 
    ],
    providers: []
})
export class DownloadmandateModule { }

