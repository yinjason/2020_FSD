import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Company{
  id: number;
  companyName: string;
  stockMarket: string;
  briefs: string;
}
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {
  companies: Company[]
  constructor(private router: Router) {
    this.companies=[
      {id: 1, companyName: "comp1", stockMarket: 'NSE,BSE', briefs: 'brefs1'},
      {id: 2, companyName: "comp2", stockMarket: 'NSE', briefs: 'brefs2'},
      {id: 3, companyName: "comp3", stockMarket: 'SH,SZ', briefs: 'brefs3'},
      {id: 4, companyName: "comp4", stockMarket: 'SZ,BSE', briefs: 'brefs4'},
      {id: 5, companyName: "comp5", stockMarket: 'aaa,BSE', briefs: 'brefs5'},
      {id: 6, companyName: "comp6", stockMarket: 'bbb', briefs: 'brefs6'}]
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

}
