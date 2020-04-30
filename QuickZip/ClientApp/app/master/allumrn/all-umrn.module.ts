import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllumrnComponent } from './allumrn.component';
import { CommonModule } from '@angular/common';
import { AllUmrnRoutingModule } from './all-umrn-routing.module';

@NgModule({
    declarations: [AllumrnComponent],
  imports: [
      CommonModule,
      AllUmrnRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AllUmrnModule { }
