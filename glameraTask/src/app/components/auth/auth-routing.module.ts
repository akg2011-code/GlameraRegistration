import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { Step2Component } from './step2/step2.component';

const routes: Routes = [
  {
    path: 'step1',
    component: RegistrationComponent,
  },
  {
    path: 'step2',
    component: Step2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
