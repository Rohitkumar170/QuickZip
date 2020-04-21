import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from 'ClientApp/app/Services/User/user-service.service';
@NgModule({
    declarations: [UserComponent],
  imports: [
      CommonModule,
      UserRoutingModule, ReactiveFormsModule, FormsModule
    ],
    providers: [UserServiceService]
})
export class UserModule { }
