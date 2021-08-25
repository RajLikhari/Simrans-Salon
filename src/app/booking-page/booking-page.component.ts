import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  arrOfValues : string[] = [];
  thisDisabled = true;



  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private dataPassService: DataPassService, private http: HttpClient) {
    this.data = this.dataPassService.getData();
    for(let i = 0; i < this.nailType.length; i++){
      if(this.nailType[i].value == this.data){
        this.dataIndex = i
      }
    }

  }

  
  openFieldSnackBar() {
      this.snackBar.open("Please enter all fields", "Close", {
        duration: 3000
      })
  }

  openPhoneSnackBar() {
    this.snackBar.open("Please enter a valid phone number", "Close", {
      duration: 3000
    })
}


  ngOnInit(): void {
    if(this.dataIndex != undefined){
      this.formGroup.controls['serviceType'].setValue(this.data)
      this.determinePricing(this.data)
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
    this.determinePricing(e.value)
  }


  processForm(){

    //Early validation
    if(this.formGroup.value.first == null || this.formGroup.value.last == null || this.formGroup.value.email == null ||this.formGroup.value.phoneNum == null || this.formGroup.value.appDate == null || this.formGroup.value.serviceType == null || this.formGroup.value.servicePrice == null || this.formGroup.value.serviceTime == null){
      this.openFieldSnackBar()
    } else if (isNaN(this.formGroup.value.phoneNum)){
      this.openPhoneSnackBar()
    } else {
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
      const data = {"firstName": this.formGroup.value.first,
                    "lastName": this.formGroup.value.last,
                    "email": this.formGroup.value.email,
                    "phoneNumber": this.formGroup.value.phoneNum,
                    "appointmentDate": this.formGroup.value.appDate,
                    "serviceType": this.formGroup.value.serviceType,
                    "servicePrice": this.formGroup.value.servicePrice,
                    "serviceTime": this.formGroup.value.serviceTime}

      let promise = new Promise<void>((resolve, reject) => {
        let apiUrl = "/api"
        this.http.post(apiUrl, data)
          .toPromise()
          .then(
            res => {
              console.log(res)
              resolve();
            },
            msg => {
              reject(msg)
            }
          )
      });


    }

    

 
    

  }

  determinePricing(data: any){
    if(data == "arc"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (data == "dip"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $45")
      this.arrOfValues.push("Long $50")
      this.arrOfValues.push("XLong: $60")
      this.arrOfValues.push("XXLong: $65")
    } else if (data == "gel"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (data == "french"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $65")
      this.arrOfValues.push("Long $70")
      this.arrOfValues.push("XLong: $75")
      this.arrOfValues.push("XXLong: $80")
    } else if (data == "freestyle") {
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


}
