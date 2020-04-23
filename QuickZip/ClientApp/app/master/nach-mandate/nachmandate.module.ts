import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NachmandateRoutingModule } from './nachmandate-routing.module';
import { NachMandateComponent } from './nach-mandate.component';
import { BankFormService } from '../../Services/BankForm/bank-form.service';
@NgModule({
    declarations: [NachMandateComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    NachmandateRoutingModule
    ],
    providers: [
        BankFormService,
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ],
})
export class NachmandateModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
