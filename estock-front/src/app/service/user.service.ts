import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginStatus: boolean = false
  module: string = ''
  constructor() { }
}
