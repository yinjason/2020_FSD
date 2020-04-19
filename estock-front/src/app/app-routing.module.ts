import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FsdLoginComponent } from '../fsd-components/fsd-login/fsd-login.component';


const routes: Routes = [
  { path: 'fsd-login', component: FsdLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
