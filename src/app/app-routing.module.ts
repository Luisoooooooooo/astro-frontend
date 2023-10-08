import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { IssComponent } from './layout/iss/iss.component';
import { MissionsComponent } from './layout/missions/missions.component';
import { NewMissionComponent } from './pages/new-mission/new-mission.component';
import { EditMissionComponent } from './pages/edit-mission/edit-mission.component';
import { SolarsystemComponent } from './layout/solarsystem/solarsystem.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MemberDashComponent } from './pages/member-dash/member-dash.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "main", redirectTo: "/" },
  { path: "iss", component: IssComponent },
  { path: "planets", component: SolarsystemComponent },
  { path: "missions", component: MissionsComponent },
  { path: "new-mision", component: NewMissionComponent },
  { path: "edit/:missionId", component: EditMissionComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "memberDash", component: MemberDashComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
