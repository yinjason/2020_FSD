import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createCompanyForm = formBuilder.group({
      companyName: "",
      stockMarket: '',
      briefs: ''
    })
   }

  createCompanyForm: FormGroup
  ngOnInit(): void {
  }
  create(){
    alert("company created")
    this.router.navigate(['/company'])
  }
  cancel(){
    this.router.navigate(['/company'])
  }

}
