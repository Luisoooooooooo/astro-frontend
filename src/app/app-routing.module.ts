import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { IssComponent } from './layout/iss/iss.component';
import { SolarsystemComponent } from './layout/solarsystem/solarsystem.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "main", redirectTo: "/" },
  { path: "iss", component: IssComponent },
  { path: "planets", component: SolarsystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
