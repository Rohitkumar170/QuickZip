import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportViewComponent } from './report-view.component';
import { ReportViewRoutingModule } from './report-view-routing.module';

@NgModule({
    declarations: [ReportViewComponent],
  imports: [
    CommonModule,
    ReportViewRoutingModule
  ]
})
export class ReportViewModule { }
