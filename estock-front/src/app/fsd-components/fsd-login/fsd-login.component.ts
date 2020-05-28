import { Component, OnInit, Injectable } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-fsd-login',
  templateUrl: './fsd-login.component.html',
  styleUrls: ['./fsd-login.component.css']
})
@Injectable()
export class FsdLoginComponent implements OnInit {

  signinForm: FormGroup
  // signinForm  = new FormGroup({
  //   userName: new FormControl(null, [Validators.required]),
  //   password: new FormControl(null, [Validators.required]),
  //   email: new FormControl(null, [Validators.required]),
  // });

  constructor(public userService: UserService, private formBuilder : FormBuilder, public router : Router) { 
    this.signinForm = this.formBuilder.group({
      userName: '',
      password: ''
    });
  }

  ngOnInit() {

    console.log('initing .....');
  }

  submitSignin() {
    if(this.signinForm.value.userName == 'admin' 
      && this.signinForm.value.password == 'admin' 
      || this.signinForm.value.userName == 'a' ) {
      this.userService.loginStatus = true
      this.router.navigate(["/adminlanding"])
    } else if(this.signinForm.value.userName == 'user' 
    && this.signinForm.value.password == 'user' 
    || this.signinForm.value.userName == 'u' ) {
      this.userService.loginStatus = true
      this.userService.module = "user"
      this.router.navigate(["/user"])
    } else {
      alert("Wrong user name or password.")
    }
  }

}
