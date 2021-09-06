import { DatePipe } from '@angular/common';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { DataPassService } from '../dataPassService';



export interface Nail{
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})


export class BookingPageComponent implements OnInit {


  nailType: Nail[] = [
    {value: 'One Color Full Set Acrylic', viewValue: 'One Color Full Set Acrylic'},
    {value: 'One Color Full Set Dip', viewValue: 'One Color Full Set Dip'},
    {value: 'One Color Full Set Gel', viewValue: 'One Color Full Set Gel'},
    {value: 'Modern French / V-French Tip', viewValue: 'Modern French / V-French Tip'},
    {value: 'Simran\'s Salon Freestyle', viewValue: 'Simran\'s Salon Freestyle'}
  ];

 

  
  data: any
  dataIndex: any
  arrOfValues : string[] = [];
  thisDisabled = true;
  timeSet: any



  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private dataPassService: DataPassService, private http: HttpClient, private datePipe: DatePipe) {
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

  openCustomSnackBar(msg: any){
    this.snackBar.open(msg, "Close", {
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


  //Need to look into disabling the button 
  onDateChange(e: any){
    const bookingTimeSend = this.datePipe.transform(e.value, 'fullDate')
    
    const bookingTimeShort = this.datePipe.transform(e.value, "shortDate")
    const currentDateShort = moment().format("M/D/YY");
    
    var bookingTimeDate; 
    var currentTimeDate;
    if(bookingTimeShort != undefined){
      const bookingTimeArray = bookingTimeShort.split('/') 
      const currentTimeArray = currentDateShort.split('/')

      var bookOne = Number(bookingTimeArray[0])
      var bookTwo = Number(bookingTimeArray[1])
      var bookThree = Number(bookingTimeArray[2])

      var currentOne = Number(currentTimeArray[0])
      var currentTwo = Number(currentTimeArray[1])
      var currentThree = Number(currentTimeArray[2])

      bookingTimeDate = new Date(bookOne, bookTwo, bookThree)
      currentTimeDate = new Date(currentOne, currentTwo, currentThree)

      if(bookingTimeDate < currentTimeDate){
        this.openCustomSnackBar("Please enter a date today or in the future!")
      } else {
        let config: any;
        if(bookingTimeSend != null){
          config = { 
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            params: new HttpParams().set("date", bookingTimeSend)
        
          };
         
        }
          let datePromise = new Promise((resolve, reject) => {
          var apiUrl2 = "grabAppointmentTime?";
          this.http.get(apiUrl2, config)
            .toPromise()
            .then(
              res=>{
                this.timeSet = res
                resolve(res);
              },
              msg=>{
                reject(msg)
              }
            )
          })

          

          
         



      }
    }



  }


  processForm(){
    const time = this.datePipe.transform(this.formGroup.value.appDate, 'fullDate')
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
                    "appointmentDate": time,
                    "serviceType": this.formGroup.value.serviceType,
                    "servicePrice": this.formGroup.value.servicePrice,
                    "serviceTime": this.formGroup.value.serviceTime}

      let promise = new Promise((resolve, reject) => {
        let apiUrl = "/createAppointment"
        this.http.post(apiUrl, data)
          .toPromise()
          .then(
            res => {
              this.openCustomSnackBar("Success, an email has been sent to you!")
              resolve(res);
            },
            msg => {
              this.openCustomSnackBar("Unable to create your appointment at this time")
              reject(msg)
            }
          )
          
      });
    }
  }



  determinePricing(data: any){
    if(data == "One Color Full Set Acrylic"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (data == "One Color Full Set Dip"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $45")
      this.arrOfValues.push("Long $50")
      this.arrOfValues.push("XLong: $60")
      this.arrOfValues.push("XXLong: $65")
    } else if (data == "One Color Full Set Gel"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $55")
      this.arrOfValues.push("Long $60")
      this.arrOfValues.push("XLong: $65")
      this.arrOfValues.push("XXLong: $70")
    } else if (data == "Modern French / V-French Tip"){
      this.thisDisabled = false
      this.arrOfValues.splice(0, this.arrOfValues.length)
      this.arrOfValues.push("Short/Medium: $65")
      this.arrOfValues.push("Long $70")
      this.arrOfValues.push("XLong: $75")
      this.arrOfValues.push("XXLong: $80")
    } else if (data == "Simran\'s Salon Freestyle") {
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
