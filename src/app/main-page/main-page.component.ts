import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPassService } from '../dataPassService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private dataPass: DataPassService) { }

 

  ngOnInit(): void {


  }

  sendArc(){
    this.dataPass.setData(1)
    this.router.navigateByUrl("/booking")
  }

  sendDip(){
    this.dataPass.setData(2)
    this.router.navigateByUrl("/booking")
  }

  sendGel(){
    this.dataPass.setData(3)
    this.router.navigateByUrl("/booking")
  }

  sendFrench(){
    this.dataPass.setData(4)
    this.router.navigateByUrl("/booking")
  }

  sendFree(){
    this.dataPass.setData(5)
    this.router.navigateByUrl("/booking")
  }

 

 
}
