import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitySetupComponent } from './entity-setup.component';
import { EntitySetupRoutingModule } from './entity-setup-routing.module';

@NgModule({
    declarations: [EntitySetupComponent],
  imports: [
    CommonModule,
    EntitySetupRoutingModule
  ]
})
export class EntitySetupModule { }
