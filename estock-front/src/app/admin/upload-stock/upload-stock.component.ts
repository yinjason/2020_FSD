import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-stock',
  templateUrl: './upload-stock.component.html',
  styleUrls: ['./upload-stock.component.css']
})
export class UploadStockComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  file2Upload: any
  uploadFile(){
    console.log(this.file2Upload)
    this.router.navigate(['/uploadFileResult'])
  }

}
