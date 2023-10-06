import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { IssComponent } from './layout/iss/iss.component';
import { SolarsystemComponent } from './layout/solarsystem/solarsystem.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { MembersComponent } from './members/members.component';

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
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
/*     UserModule  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
