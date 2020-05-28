import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.css']
})
export class UploadResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  uploadInfo: any = {
    companyName: 'abc Co.',
    stockExchange: 'NBC',
    importedNo: 123,
    fromDate: new Date("2020-01-01"),
    toDate: new Date("2020-02-01")
    
  }
}
