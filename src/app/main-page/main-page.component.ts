import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this.playTheArrow()

  }

  playTheArrow(){
    document.getElementById("arrow")?.animate([
      { transform: 'translateX(10px)' }, 
      { transform: 'translateX(130px)' },
      { transform: 'translateX(10px)' }
    ], {
      duration: 2000,
      iterations: Infinity
    })
    
  }

}
