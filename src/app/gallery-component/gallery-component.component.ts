import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.component.html',
  styleUrls: ['./gallery-component.component.scss']
})
export class GalleryComponentComponent implements OnInit {

  constructor() { }

  array: any
  ngOnInit(): void {
    this.array = ["../../assets/IMG_1179.jpg", 
    "../../assets/IMG_1187.jpg",
    "../../assets/IMG_1383.jpg",
    "../../assets/IMG_1398.jpg",
    "../../assets/IMG_1480.jpg",
    "../../assets/IMG_1632.jpg",
    "../../assets/IMG_1670.jpg",
    "../../assets/IMG_1849.jpg",
    "../../assets/IMG_2059.jpg",
    "../../assets/IMG_2092.jpg",
    "../../assets/IMG_2135.jpg",
    "../../assets/IMG_2158.jpg"
  
  ];

  }

}
