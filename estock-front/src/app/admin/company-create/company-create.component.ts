import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/model/company';
import { DatePipe } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  private datePipe: DatePipe
  constructor(private formBuilder: FormBuilder, private router: Router, private companyService: CompanyService) {
    this.createCompanyForm = formBuilder.group({
      companyName: "",
      stockMarket: "",
      turnOver: "",
      description: "",
      ipoDate: "",
      ceo: ""
    })
   }

  createCompanyForm: FormGroup
  ngOnInit(): void {
  }
  create(){
    const company: Company = {
      companyName:this.createCompanyForm.value.companyName,
      stockMarket:this.createCompanyForm.value.stockMarket,
      turnOver:this.createCompanyForm.value.turnOver,
      description:this.createCompanyForm.value.description,
      //ipoDate:this.datePipe.transform(this.createCompanyForm.value.ipoDate, 'yyyy-MM-dd'),
      ipoDate: this.createCompanyForm.value.ipoDate,
      ceo:this.createCompanyForm.value.ceo
    }
    this.companyService.createCompany(company).pipe(first()).subscribe(
      data=>{
        console.log(data)
        alert("company created")
      },
      error=>{

        alert("Failed")
      }
      )
    this.router.navigate(['/company'])
  }
  cancel(){
    this.router.navigate(['/company'])
  }

}
