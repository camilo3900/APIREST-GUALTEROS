import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
import { LoginModule } from "./pages/login/login.module";
import { RegisterModule } from "./pages/register/register.module";




@NgModule({
  declarations: [
    AuthComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    LoginModule,
    RegisterModule
  ],
  exports:[AuthComponent]
})
export class AuthModule { }
