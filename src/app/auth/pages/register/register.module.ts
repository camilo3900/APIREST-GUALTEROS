import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports:[
    RegisterComponent
  ]

})
export class RegisterModule { }
