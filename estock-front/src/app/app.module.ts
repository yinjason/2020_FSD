import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FsdLoginComponent } from './fsd-components/fsd-login/fsd-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './fsd-components/signup/signup.component';
import { ChangepwComponent } from './fsd-components/changepw/changepw.component';
import { TestComponent } from './fsd-components/test/test.component';
import { LandingComponent } from './admin/landing/landing.component';
import { UploadStockComponent } from './admin/upload-stock/upload-stock.component';
import { UploadResultComponent } from './admin/upload-result/upload-result.component';
import { CompanyComponent } from './admin/company/company.component';
import { CompanyCreateComponent } from './admin/company-create/company-create.component';
import { UserService } from './service/user.service';
import { UserComponent } from './user/user/user.component';
import { CompareComponent } from './user/compare/compare.component';
import { CompareResultComponent } from './user/compare-result/compare-result.component';
import { Compare2ResultComponent } from './user/compare2-result/compare2-result.component';
import { Compare2Component } from './user/compare2/compare2.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      FsdLoginComponent,
      SignupComponent,
      ChangepwComponent,
      TestComponent,
      LandingComponent,
      UploadStockComponent,
      UploadResultComponent,
      CompanyComponent,
      CompanyCreateComponent,
      UserComponent,
      CompareComponent,
      CompareResultComponent,
      Compare2ResultComponent,
      Compare2Component,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgxEchartsModule,
      HttpClientModule
   ],
   providers: [
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
