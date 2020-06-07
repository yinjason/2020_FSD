import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginStatus: boolean = false
  isAdmin: boolean = false
  constructor(public userService: UserService) {
    this.loginStatus = this.userService.loginStatus
    this.isAdmin = this.userService.module == 'admin'
  }
  title = 'estock-front';
}
