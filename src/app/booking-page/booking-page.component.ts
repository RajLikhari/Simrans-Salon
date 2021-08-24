import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { DataPassService } from '../dataPassService';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private dataPassService: DataPassService) {
   this.data = this.dataPassService.getData()
   console.log(this.data)
   
  }

  ngOnInit(): void { }


  formGroup = this.fb.group({
    first: new FormControl(null, [Validators.required]),
    last: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNum: new FormControl(null, [Validators.required]),
    appDate: new FormControl(null, [Validators.required]),
    serviceType: new FormControl(null, [Validators.required])

  })

  public data = ''
  firstName: any
  lastName: any
  email: any
  phoneNum: any
  appDate: any  
  serviceType: any

  onSelectChange(e: any){
    console.log(e)
  }


  processForm(){
    this.firstName = this.formGroup.value.first
    this.lastName = this.formGroup.value.last
    this.email = this.formGroup.value.email
    this.phoneNum = this.formGroup.value.phoneNum
    this.appDate = this.formGroup.value.appDate
    this.serviceType = this.formGroup.value.serviceType


    if(this.firstName == null || this.lastName == null || this.email == null || this.phoneNum == null || this.appDate == null){
      this.snackBar.open("Please enter all fields")
    } 
  }


}
