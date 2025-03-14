
 import { Component, ElementRef, HostListener, OnInit, viewChild, ViewChild } from '@angular/core';
 import { NgFor, NgClass } from '@angular/common';

 export interface Image {
   src: string,
   cloned: boolean
 };

 export interface State {
    savedMousePosition: number,
    position: number,
    currentSlideIndex: number,
    slideWidth: number,
    autoPlay: boolean,
    isCloned: boolean,
    timeInterval: number
 };

 @Component({
   selector: 'app-carrousel',
   templateUrl: './carrousel.component.html',
   styleUrls: ['./carrousel.component.css'],
   standalone: true,
   imports: [NgFor, NgClass]
 })

 
 export class CarrouselComponent implements OnInit {
   slideAuto!: ReturnType<typeof setInterval>;
   clonedSlides: Image[] = [];

   @ViewChild('carousel') carousel!: ElementRef<HTMLElement>;
   @ViewChild('img') img!: ElementRef<HTMLElement>;
   @ViewChild('main') main!: ElementRef<HTMLElement>;

   state: State = {
      savedMousePosition: 0,
      position: 0,
      currentSlideIndex: 0,
      slideWidth: 0,
      autoPlay: true,
      isCloned: false,
      timeInterval: 4000
   };

   images: Image[] = [
     { src: "assets/img/1a_etapa2023.jpg", cloned: false },
     { src: "assets/img/foto_atleta.jpg", cloned: false },
     { src: "assets/img/2a_etapa2023.jpg", cloned: false },
     { src: "assets/img/4a_etapa2023.jpg", cloned: false },
     { src: "assets/img/foto_atleta.jpg", cloned: false }
   ];

   private cloneSlides(slides: Image[], qtClones: number): Image[] {
       return [
          ...this.images.slice(-qtClones).map(el => ( { ...el, cloned: true } )),
          ...slides,
          ...this.images.slice(0, qtClones).map(el => ( { ...el, cloned: true } ))
       ]
   }

   constructor() {}

   ngOnInit(): void {
    
      this.clonedSlides = this.cloneSlides(this.images, 2);
    
   }

   ngAfterViewInit() {

      this.initSlider(0, this.state.autoPlay, this.state.timeInterval);
    
   }

   @HostListener('window: resize', ['$event'])
   onResize(event: Event): void {
       clearTimeout(this.slideAuto);
       this.slideAuto = setTimeout(() => {
           this.setVisibleSlide(this.state.currentSlideIndex, true);
       }, 2000);
   }

   onSlideTransitionEnd(): void {
       const slideItem = this.clonedSlides[this.state.currentSlideIndex - 1];
       if(slideItem.cloned && this.clonedSlides.indexOf(slideItem) > 0) {
          this.setVisibleSlide(2, false);
       }
       if(slideItem.cloned && this.clonedSlides.indexOf(slideItem) < 0) {
          this.setVisibleSlide(this.clonedSlides.length - 3, false);
       }
   }

   translateSlide(position: number): void {
    this.carousel.nativeElement.style.transform = `translateX(${position}px)`;
    this.state.savedMousePosition = position;

   }

   getCenterPosition(index: number): number {
      const slideItem = this.img.nativeElement;

      const slideWidth = slideItem.clientWidth;
    
      const parentWidth = this.main.nativeElement.clientWidth;
      
      let margin: number;
      let position: number;
    
      if(parentWidth < 768) {
         margin = (parentWidth - slideWidth - 32) / 2;
         position = margin - (index * (slideWidth + 32));
      } else {
         margin = (parentWidth - slideWidth - 64) / 2;
         position = margin - (index * (slideWidth + 64));
      }
      
    return position;
   }

   setVisibleSlide(index: number, animate: boolean): void {
      if(index === 0 || index === this.clonedSlides.length - 1) {
          index = this.state.currentSlideIndex;
      }
      const position = this.getCenterPosition(index);
      this.state.currentSlideIndex = index;

      const slide = this.carousel.nativeElement;

      slide.style.transition = animate === true ? `transform .5s` : `none`;
    
      this.translateSlide(position);

   }

   dragstartPreventDefault(event: MouseEvent): void {
       event.preventDefault();
   }

   nextImage = (): void => {
      if(this.state.currentSlideIndex >= this.clonedSlides.length - 2) {
          this.state.currentSlideIndex = 2;
          this.setVisibleSlide(this.state.currentSlideIndex, false);
          this.slideAuto = setTimeout(() => {
              this.nextImage();
          }, 1);
          return;
      } else {
          this.state.currentSlideIndex++;
      }
      this.setVisibleSlide(this.state.currentSlideIndex, true);   
   }
   
   previousImage(): void {
      if(this.state.currentSlideIndex <= 1) {
          this.state.currentSlideIndex = this.clonedSlides.length - 2;
          this.setVisibleSlide(this.state.currentSlideIndex, false);
          this.slideAuto = setTimeout(() => {
            this.previousImage();
          }, 1);
          return;
      } else {
          this.state.currentSlideIndex--;
      }
      this.setVisibleSlide(this.state.currentSlideIndex, true);
   }

   setAutoPlay(): void {
       if(this.state.autoPlay) {
           this.slideAuto = setInterval(this.nextImage, this.state.timeInterval);
       }
   }

   stopAutoPlay = (): void => {
    //    clearInterval(this.slideAuto);
       console.log('Evento to mouseenter');
   }

   initSlider(index: number, autoPlay: boolean, timeInterval: number): void {
       this.state.autoPlay = autoPlay;
       this.state.timeInterval = timeInterval;
       this.setVisibleSlide(index + 2, autoPlay);
       this.setAutoPlay();
   }

 }

