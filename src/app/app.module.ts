import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { IssComponent } from './layout/iss/iss.component';
import { SolarsystemComponent } from './layout/solarsystem/solarsystem.component';
import { MissionsComponent } from './layout/missions/missions.component';
import { NewMissionComponent } from './pages/new-mission/new-mission.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { MembersComponent } from './members/members.component';
import { MemberDashComponent } from './pages/member-dash/member-dash.component';
import { EditMissionComponent } from './pages/edit-mission/edit-mission.component';
import { EditMemberComponent } from './pages/edit-member/edit-member.component';

/* import { UserModule } from './user/user.module'; */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IssComponent,
    SolarsystemComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    MembersComponent,
    MemberDashComponent,
    MissionsComponent,
    NewMissionComponent,
    EditMissionComponent,
    EditMemberComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
