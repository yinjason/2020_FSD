import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  companies: Company[]
  constructor(private router: Router, private companyService: CompanyService) {
    this.companies=[]

    console.error('------------starting')
    this.companyService.listAllCompany().subscribe(data=>{
      console.log('-------data:'+data)
      this.companies = data as Company[]
    },
    error=>{
      alert(error)
      console.error('---error' + error)
    })
   }

   url: string = ''
   edit(id: string){
     console.log('edit' +id)
   }
   delete(id: string){
     console.log('delete'+id)
   }
   create(){
    this.router.navigate(['/createCompany'])
   }
  ngOnInit(): void {
  }

  getCompanies() {
    return this.companyService.listAllCompany()
  }

}
