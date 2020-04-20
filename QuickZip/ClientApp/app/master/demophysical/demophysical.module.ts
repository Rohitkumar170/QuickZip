import { NgModule } from '@angular/core';
import { DemophysicalComponent } from './demophysical.component';
import { CommonModule } from '@angular/common';
import { DemophysicalRoutingModule } from './demophysical-routing.module';

@NgModule({
    declarations: [DemophysicalComponent],
  imports: [
      CommonModule,
    DemophysicalRoutingModule
  ]
})
export class DemophysicalModule { }
