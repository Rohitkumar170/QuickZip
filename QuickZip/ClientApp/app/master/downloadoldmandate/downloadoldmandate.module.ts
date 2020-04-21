import { NgModule } from '@angular/core';
import { DownloadoldmandateComponent } from './downloadoldmandate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { DownloadoldmandateRoutingModule } from './downloadoldmandate-routing.module';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';

@NgModule({
    declarations: [DownloadoldmandateComponent],
  imports: [
      CommonModule,
      DownloadoldmandateRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers: [OldmandateService]
})
export class DownloadoldmandateModule { }
