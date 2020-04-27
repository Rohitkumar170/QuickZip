import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRightsComponent } from './access-rights.component';
import { AccessRightsRoutingModule } from './access-rights-routing.module';

@NgModule({
    declarations: [AccessRightsComponent],
    imports: [
        CommonModule,
        AccessRightsRoutingModule
    ]
})
export class AccessRightsModule { }
