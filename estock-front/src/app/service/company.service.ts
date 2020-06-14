import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  listAllCompany() {
      return this.httpClient.get(`${environment.gatewayurl}/company/list`)
  }

  createCompany(company: Company) {
    return this.httpClient.post(`${environment.gatewayurl}/company/create`, company);
  }
}
