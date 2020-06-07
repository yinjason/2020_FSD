import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FsdLoginComponent } from './fsd-components/fsd-login/fsd-login.component';
import { SignupComponent } from './fsd-components/signup/signup.component';
import { ChangepwComponent } from './fsd-components/changepw/changepw.component';
import { LandingComponent } from './admin/landing/landing.component';
import { UserComponent } from './user/user/user.component';
import { CompanyComponent } from './admin/company/company.component';
import { CompanyCreateComponent } from './admin/company-create/company-create.component';


const routes: Routes = [
  { path: 'fsd-login', component: FsdLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'changepw', component: ChangepwComponent },
  { path: 'adminlanding', component: LandingComponent },
  { path: 'user', component: UserComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'createCompany', component: CompanyCreateComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
