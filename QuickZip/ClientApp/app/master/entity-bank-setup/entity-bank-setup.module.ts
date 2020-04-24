import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
import { EntityBankSetupRoutingModule } from './entity-bank-setup-routing.module';


@NgModule({
    declarations: [EntityBankSetupComponent],
    imports: [
        CommonModule,
        EntityBankSetupRoutingModule
    ]
})
export class EntityBankSetupModule { }
