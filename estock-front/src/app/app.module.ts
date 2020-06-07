import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FsdLoginComponent } from './fsd-components/fsd-login/fsd-login.component';
import { ChangepwComponent } from './fsd-components/changepw/changepw.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './fsd-components/signup/signup.component';
import { CompareComponent } from './user/compare/compare.component';
import { Compare2Component } from './user/compare2/compare2.component';
import { Compare2ResultComponent } from './user/compare2-result/compare2-result.component';
import { CompareResultComponent } from './user/compare-result/compare-result.component';
import { UserComponent } from './user/user/user.component';
import { UserService } from './service/user.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { CompanyCreateComponent } from './admin/company-create/company-create.component';

@NgModule({
   declarations: [
      AppComponent,
      FsdLoginComponent,
      ChangepwComponent,
      SignupComponent,
      CompareComponent,
      CompareResultComponent,
      Compare2Component,
      Compare2ResultComponent,
      UserComponent,
      CompanyCreateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgxEchartsModule
   ],
   providers: [UserService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
