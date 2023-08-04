import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { Step2Component } from './step2/step2.component';

@NgModule({
  declarations: [RegistrationComponent, Step2Component],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
