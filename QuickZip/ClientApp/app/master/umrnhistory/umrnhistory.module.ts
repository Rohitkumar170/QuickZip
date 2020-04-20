import { NgModule } from '@angular/core';
import { UmrnhistoryComponent } from './umrnhistory.component';
import { CommonModule } from '@angular/common';
import { UmrnhistoryRoutingModule } from './umrnhistory-routing.module';

@NgModule({
    declarations: [UmrnhistoryComponent],
  imports: [
      CommonModule,
    UmrnhistoryRoutingModule
  ]
})
export class UmrnhistoryModule { }
