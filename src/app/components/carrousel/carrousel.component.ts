/*
 import { Component, OnInit } from '@angular/core';

 export interface Image {
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
     { src: "assets/img/1a_etapa2023.jpg", selected: 'selected' },
     { src: "assets/img/foto_atleta.jpg", selected: '' },
     { src: "assets/img/2a_etapa2023.jpg", selected: '' },
     { src: "assets/img/4a_etapa2023.jpg", selected: '' },
     { src: "assets/img/foto_atleta.jpg", selected: '' }
   ];

   constructor() { }

   ngOnInit(): void {
     this.updateVisibleImages();
     this.start();
   }

   updateVisibleImages(): void {
     this.images.forEach((image, index) => {
       image.selected = index === this.currentImgIndex ? 'selected' : '';
     });
   }

   nextImage(): void {
     this.currentImgIndex = (this.currentImgIndex + 1) % this.images.length;
     this.updateVisibleImages();
   }
   previousImage(): void {
     this.currentImgIndex = (this.currentImgIndex - 1 + this.images.length) % this.images.length;
     this.updateVisibleImages();
   }

   start(): void {
     setInterval(() => {
       this.nextImage();
     }, this.time);
   }
 }

*/


import { Component, ViewChild, ElementRef, OnInit, asNativeElements } from '@angular/core';

export interface Image {
  src: string;
  selected: boolean;
  center: boolean;
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})

export class CarrouselComponent implements OnInit {
  time: number = 2000;
  currentImgIndex: number = 0;
  images: Image[] = [
    { src: "assets/img/1a_etapa2023.jpg", selected: false, center: false },
    { src: "assets/img/foto_atleta.jpg", selected: false, center: false },
    { src: "assets/img/2a_etapa2023.jpg", selected: false, center: false },
    { src: "assets/img/4a_etapa2023.jpg", selected: false, center: false },
    { src: "assets/img/foto_atleta.jpg", selected: false, center: false }
    // { src: "assets/img/1a_etapa2023.jpg", selected: true, center: true },
    // { src: "assets/img/foto_atleta.jpg", selected: false, center: false },
    // { src: "assets/img/2a_etapa2023.jpg", selected: false, center: false },
    // { src: "assets/img/4a_etapa2023.jpg", selected: false, center: false },
    // { src: "assets/img/foto_atleta.jpg", selected: false, center: false },
    // { src: "assets/img/1a_etapa2023.jpg", selected: true, center: true },
    // { src: "assets/img/foto_atleta.jpg", selected: false, center: false },
    // { src: "assets/img/2a_etapa2023.jpg", selected: false, center: false },
    // { src: "assets/img/4a_etapa2023.jpg", selected: false, center: false },
    // { src: "assets/img/foto_atleta.jpg", selected: false, center: false }
  ];

  @ViewChild('carousel') carousel!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.start();
  }

  updateVisibleImages(): void {
    this.images.forEach((image, index) => {
      image.selected = index === this.currentImgIndex;
    });

    let offset = -100 / 3 * this.currentImgIndex;
    if(this.carousel && this.carousel.nativeElement) {
      
      if(offset == -100) {
        offset = 0;
      }
      this.carousel.nativeElement.style.transform = `translateX(${offset}%)`;
      //this.carousel.nativeElement.style.width = `124rem`;
      console.log("I am carousel.nativeElement.style.width " + this.carousel.nativeElement.style.width);
    }
    
  }

  nextImage(): void {
    this.currentImgIndex = (this.currentImgIndex + 1) % this.images.length;
    this.updateVisibleImages();
  }

  previousImage(): void {
    this.currentImgIndex = (this.currentImgIndex - 1 + this.images.length) % this.images.length;
    this.updateVisibleImages();
  }

  start(): void {
    setInterval(() => {
      this.nextImage();
    }, this.time);
  }
}
