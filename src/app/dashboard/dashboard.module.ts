import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';



@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
