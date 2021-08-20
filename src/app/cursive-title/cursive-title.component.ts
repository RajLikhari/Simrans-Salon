import { Component, OnInit } from '@angular/core';
import { deflateRaw } from 'zlib';

@Component({
  selector: 'app-cursive-title',
  templateUrl: './cursive-title.component.html',
  styleUrls: ['./cursive-title.component.scss']
})
export class CursiveTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const Vara = require("vara");
    var vara = new Vara("#element","https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",[{
      text:"Welcome to Simran's Salon",
      fontSize: 95,
      strokeWidth: 1.1,
      id: "draw",
      duration: 3000,
      textAlign:"center",
      color: "black"
    }]);

    vara.draw("draw");
  
  
  }

}
