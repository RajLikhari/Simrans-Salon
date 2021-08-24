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
    this.dataPass.setData("arc")
    this.router.navigateByUrl("/booking")
  }

  sendDip(){
    this.dataPass.setData("dip")
    this.router.navigateByUrl("/booking")
  }

  sendGel(){
    this.dataPass.setData("dip")
    this.router.navigateByUrl("/booking")
  }

  sendFrench(){
    this.dataPass.setData("french")
    this.router.navigateByUrl("/booking")
  }

  sendFree(){
    this.dataPass.setData("freestyle")
    this.router.navigateByUrl("/booking")
  }

 

 
}
