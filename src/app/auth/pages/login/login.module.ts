import { NgModule } from '@angular/core';


import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule 
  ],
  exports:[
    LoginComponent
  ]

})
export class LoginModule { }
