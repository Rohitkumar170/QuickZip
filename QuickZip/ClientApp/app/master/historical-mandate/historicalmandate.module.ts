import { NgModule } from '@angular/core';
import { HistoricalMandateComponent } from './historical-mandate.component';
import { CommonModule } from '@angular/common';
import { HistoricalmandateRoutingModule } from './historicalmandate-routing.module';

@NgModule({
    declarations: [HistoricalMandateComponent],
  imports: [
      CommonModule,
    HistoricalmandateRoutingModule
  ]
})
export class HistoricalmandateModule { }
