import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent implements OnInit {

  constructor() { }

  @Input() public imageUrl: any

  ngOnInit(): void {

  }

}
