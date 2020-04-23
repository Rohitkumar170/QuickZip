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
    providers: [UserServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
})
export class UserModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
