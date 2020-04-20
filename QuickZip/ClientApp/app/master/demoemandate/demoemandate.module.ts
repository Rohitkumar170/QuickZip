import { NgModule } from '@angular/core';
import { DemoemandateComponent } from './demoemandate.component';
import { CommonModule } from '@angular/common';
import { DemoemandateRoutingModule } from './demoemandate-routing.module';

@NgModule({
    declarations: [DemoemandateComponent],
  imports: [
      CommonModule,
    DemoemandateRoutingModule
  ]
})
export class DemoemandateModule { }
