import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { Step2Component } from './step2/step2.component';
import { SuccessfulRegistrationComponent } from './successful-registration/successful-registration.component';
@NgModule({
  declarations: [
    RegistrationComponent,
    Step2Component,
    SuccessfulRegistrationComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
