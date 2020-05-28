import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  validateForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
  });

  constructor() {
  }

  ngOnInit() {
  }

  public handleInitForm(): void {
    this.validateForm.reset();
  }
}
