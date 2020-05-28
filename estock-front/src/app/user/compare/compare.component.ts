import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {


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
    alert("compare created")
    this.router.navigate(['/compareresult'])
  }
  cancel(){
    this.router.navigate(['/user'])
  }
}
