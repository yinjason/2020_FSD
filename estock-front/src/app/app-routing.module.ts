import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FsdLoginComponent } from './fsd-components/fsd-login/fsd-login.component';
import { SignupComponent } from './fsd-components/signup/signup.component';
import { ChangepwComponent } from './fsd-components/changepw/changepw.component';
import { TestComponent } from './fsd-components/test/test.component';
import { LandingComponent } from './admin/landing/landing.component';
import { UploadStockComponent } from './admin/upload-stock/upload-stock.component';
import { CompanyComponent } from './admin/company/company.component';
import { UploadResultComponent } from './admin/upload-result/upload-result.component';
import { CompanyCreateComponent } from './admin/company-create/company-create.component';
import { UserComponent } from './user/user/user.component';
import { CompareComponent } from './user/compare/compare.component';
import { Compare2Component } from './user/compare2/compare2.component';
import { CompareResultComponent } from './user/compare-result/compare-result.component';
import { Compare2ResultComponent } from './user/compare2-result/compare2-result.component';


const routes: Routes = [
  { path: 'login', component: FsdLoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'changepw', component: ChangepwComponent},
  { path: 'adminlanding', component: LandingComponent},
  { path: 'uploadFile', component: UploadStockComponent},
  { path: 'uploadFileResult', component: UploadResultComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'createCompany', component: CompanyCreateComponent},
  { path: 'user', component: UserComponent},
  { path: 'compare', component: CompareComponent},
  { path: 'compare2', component: Compare2Component},
  { path: 'compareresult', component: CompareResultComponent},
  { path: 'compare2result', component: Compare2ResultComponent},
  { path: '**', component: FsdLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
