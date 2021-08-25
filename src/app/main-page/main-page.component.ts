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
    this.dataPass.setData("One Color Full Set Acrylic")
    this.router.navigateByUrl("/booking")
  }

  sendDip(){
    this.dataPass.setData("One Color Full Set Dip")
    this.router.navigateByUrl("/booking")
  }

  sendGel(){
    this.dataPass.setData("One Color Full Set Gel")
    this.router.navigateByUrl("/booking")
  }

  sendFrench(){
    this.dataPass.setData("Modern French / V-French Tip")
    this.router.navigateByUrl("/booking")
  }

  sendFree(){
    this.dataPass.setData("Simran\'s Salon Freestyle")
    this.router.navigateByUrl("/booking")
  }

 

 
}
