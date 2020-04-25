import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UmrnhistoryComponent } from './umrnhistory.component';
import { CommonModule } from '@angular/common';
import { UmrnhistoryRoutingModule } from './umrnhistory-routing.module';
import { UMRNHISTORYSERVICEService } from '../../services/umrn_history/umrn-history-service.service';

@NgModule({
    declarations: [UmrnhistoryComponent],
  imports: [
      CommonModule,
      UmrnhistoryRoutingModule, FormsModule, ReactiveFormsModule
    ],
    providers: [UMRNHISTORYSERVICEService]
})
export class UmrnhistoryModule { }
 