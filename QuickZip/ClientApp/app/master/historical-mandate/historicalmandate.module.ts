import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';
import { HistoricalMandateComponent } from './historical-mandate.component';
import { HistoricalmandateRoutingModule } from './historicalmandate-routing.module';

@NgModule({
    declarations: [HistoricalMandateComponent],
  imports: [
      CommonModule, FormsModule, ReactiveFormsModule,
    HistoricalmandateRoutingModule
    ],
    providers: [
        HistoricalMandateServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class HistoricalmandateModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
