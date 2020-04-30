import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
import { EntityBankSetupRoutingModule } from './entity-bank-setup-routing.module';
import { EntityBankService } from 'ClientApp/app/Services/EntityBankSetup/entity-bank.service';


@NgModule({
    declarations: [EntityBankSetupComponent],
    imports: [
        CommonModule,
        EntityBankSetupRoutingModule, ReactiveFormsModule, FormsModule
    ],
    providers: [EntityBankService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
})

export class EntityBankSetupModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
