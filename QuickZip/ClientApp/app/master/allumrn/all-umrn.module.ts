import { NgModule } from '@angular/core';
import { AllumrnComponent } from './allumrn.component';
import { CommonModule } from '@angular/common';
import { AllUmrnRoutingModule } from './all-umrn-routing.module';

@NgModule({
    declarations: [AllumrnComponent],
  imports: [
      CommonModule,
    AllUmrnRoutingModule
  ]
})
export class AllUmrnModule { }
