import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NachmandateRoutingModule } from './nachmandate-routing.module';
import { NachMandateComponent} from './nach-mandate.component';
@NgModule({
    declarations: [NachMandateComponent],
  imports: [
      CommonModule,
    NachmandateRoutingModule
  ]
})
export class NachmandateModule { }
