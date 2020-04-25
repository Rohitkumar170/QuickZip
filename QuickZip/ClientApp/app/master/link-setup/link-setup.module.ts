import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkSetupComponent } from './link-setup.component';
import { LinkSetupRoutingModule } from './link-setup-routing.module';

@NgModule({
    declarations: [LinkSetupComponent],
    imports: [
        CommonModule,
        LinkSetupRoutingModule
    ]
})
export class LinkSetupModule { }
