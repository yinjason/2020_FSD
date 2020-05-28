import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare2',
  templateUrl: './compare2.component.html',
  styleUrls: ['./compare2.component.css']
})
export class Compare2Component implements OnInit {



  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.compareForm = formBuilder.group({
      companySector: "",
      stockMarket: '',
      from: '',
      to: ''
    })
   }

  compareForm: FormGroup
  ngOnInit(): void {
  }
  compare(){
    alert("compare2 starts")
    this.router.navigate(['/compare2result'])
  }
  cancel(){
    this.router.navigate(['/user'])
  }
}
