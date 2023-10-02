import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { IssComponent } from './layout/iss/iss.component';
import { SolarsystemComponent } from './layout/solarsystem/solarsystem.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "main", redirectTo: "/" },
  { path: "iss", component: IssComponent },
  { path: "planets", component: SolarsystemComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
