import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { DataPassService } from '../dataPassService';



export interface Nail{
  value: string;
  viewValue: string;
}

export interface Time{
  value: string;
  viewValue: string
}


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})


export class BookingPageComponent implements OnInit {


  nailType: Nail[] = [
    {value: 'arc', viewValue: 'One Color Full Set Acrylic'},
    {value: 'dip', viewValue: 'One Color Full Set Dip'},
    {value: 'gel', viewValue: 'One Color Full Set Gel'},
    {value: 'french', viewValue: 'Modern French / V-French Tip'},
    {value: 'freestyle', viewValue: 'Simran\'s Salon Freestyle'}
  ];

  timeSet: Time[] = [
    {value: '1', viewValue: '1 PM'},
    {value: '2', viewValue: '2 PM'},
  ]

  
  data: any
  dataIndex: any
  selectedValue: any
  arrOfValues : string[] = [];
  thisDisabled = true;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private dataPassService: DataPassService) {
    this.data = this.dataPassService.getData();
    for(let i = 0; i < this.nailType.length; i++){
      if(this.nailType[i].value == this.data){
        this.dataIndex = i
      }
    }

  }

  ngOnInit(): void {
    if(this.dataIndex != undefined){
      this.selectedValue = this.nailType[this.dataIndex].value
    }
    if(this.selectedValue == "arc"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (this.selectedValue == "dip"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $45")
      this.arrOfValues.push("Long $50")
      this.arrOfValues.push("XLong: $60")
      this.arrOfValues.push("XXLong: $65")
    } else if (this.selectedValue== "gel"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (this.selectedValue == "french"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $65")
      this.arrOfValues.push("Long $70")
      this.arrOfValues.push("XLong: $75")
      this.arrOfValues.push("XXLong: $80")
    } else if (this.selectedValue== "freestyle") {
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $75")
      this.arrOfValues.push("Long $90")
      this.arrOfValues.push("XLong: $105")
      this.arrOfValues.push("XXLong: $115")
    } else {
      this.thisDisabled = true
    }


  }


  formGroup = this.fb.group({
    first: new FormControl(null, [Validators.required]),
    last: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNum: new FormControl(null, [Validators.required]),
    appDate: new FormControl(null, [Validators.required]),
    serviceType: new FormControl(null, [Validators.required]),
    servicePrice: new FormControl(null, [Validators.required]),
    serviceTime: new FormControl(null, [Validators.required])

  })


 

  onSelectChange(e: any){
    console.log(e)
    if(e.value == "arc"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (e.value == "dip"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $45")
      this.arrOfValues.push("Long $50")
      this.arrOfValues.push("XLong: $60")
      this.arrOfValues.push("XXLong: $65")
    } else if (e.value == "gel"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (e.value == "french"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $65")
      this.arrOfValues.push("Long $70")
      this.arrOfValues.push("XLong: $75")
      this.arrOfValues.push("XXLong: $80")
    } else if (e.value == "freestyle") {
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $75")
      this.arrOfValues.push("Long $90")
      this.arrOfValues.push("XLong: $105")
      this.arrOfValues.push("XXLong: $115")
    } else {
      this.thisDisabled = true
    }
  }


  processForm(){
    
  }


}
