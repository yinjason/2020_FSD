import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent implements OnInit {

  changepwForm  = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
  });
  constructor(private formBuilder : FormBuilder) { 
    this.changepwForm = this.formBuilder.group({
      name: '',
      oldPassword: '',
      newPassword: ''
    });
  }

  ngOnInit(): void {
  }
  submitChangepw() {
    console.log('submit  signup called .....');
    
  }

}
