import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: UserService, public router: Router){
  }
  title = 'estock-front';
  signout(){
    this.userService.loginStatus = false
    this.router.navigate(['/login'])
  }




}
