import { Component, OnInit } from '@angular/core';

interface Image {
  src: string;
  selected: string;
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})


export class CarrouselComponent implements OnInit {
  time: number = 4000;
  currentImgIndex: number = 0;

  images: Image[] = [
    { src: "assets/img/1a_etapa2023.jpg", selected: "selected" },
    { src: "assets/img/foto_atleta.jpg", selected: '' },
    { src: "assets/img/2a_etapa2023.jpg", selected: '' },
    { src: "assets/img/4a_etapa2023.jpg", selected: '' },
    { src: "assets/img/foto_atleta.jpg", selected: '' }
  ];

  constructor() { }

  ngOnInit(): void {
   this.start();
  }

  nextImage(): void {
    this.images[this.currentImgIndex].selected = '';
    this.currentImgIndex = (this.currentImgIndex + 1) % this.images.length;
    this.images[this.currentImgIndex].selected = 'selected';
  }

  start(): void {
    setInterval(() => {
      this.nextImage();
    }, this.time);
  }

}