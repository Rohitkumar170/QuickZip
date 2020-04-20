import { NgModule } from '@angular/core';
import { NachtransactionpresentationComponent } from './nachtransactionpresentation.component';
import { CommonModule } from '@angular/common';
import { NachtransactionpresentationRoutingModule } from './nachtransactionpresentation-routing.module';

@NgModule({
    declarations: [NachtransactionpresentationComponent],
  imports: [
      CommonModule,
    NachtransactionpresentationRoutingModule
  ]
})
export class NachtransactionpresentationModule { }
