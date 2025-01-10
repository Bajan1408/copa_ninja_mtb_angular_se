import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewChildren, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu_bar') menuBar!: ElementRef;
  @ViewChild('header_menu_mobile') headerMenuMobile!: ElementRef;
  //headerMenuMobile: HTMLElement;
//   frameCentral: HTMLElement;
  headerMenu: HTMLElement;
 
  constructor(private renderer: Renderer2, private element: ElementRef) { 
    //this.headerMenuMobile = this.element.nativeElement.querySelector('.header-menu-mobile');
    // this.frameCentral = this.element.nativeElement.querySelector('.frame-central_header');
    this.headerMenu = this.element.nativeElement.querySelector('.header-menu');
  }

  showMobileMenu():void {
    console.log(`Chamei o método showMobileMenu()`);
    // this.frameCentral = this.element.nativeElement.querySelector('.frame-central_header');
    this.headerMenu = this.element.nativeElement.querySelector('.header-menu');
    //this.headerMenuMobile = this.element.nativeElement.querySelector('.header-menu-mobile');

    const asideMenu = this.element.nativeElement.querySelector('#menu-mobile');
    const menuLiMobile = this.element.nativeElement.querySelector('.menu-li-mobile');
    // const imgMenu = this.renderer.createElement('img');
    // imgMenu.setAttribute('src', '../../../assets/img/menu_bar_close_white.svg');
    // imgMenu.setAttribute('id', 'menu-bar-inside');

    // if(this.element.nativeElement.querySelector('#menu-bar-inside') === null) {
    //     this.renderer.insertBefore(this.headerMenuMobile, imgMenu, asideMenu);
    // }
    
    // const menuBar = this.element.nativeElement.querySelector('#menu_bar');

    this.renderer.addClass(this.headerMenuMobile.nativeElement, 'appear');

    // this.renderer.listen(menuBar, 'click', () => {
    //     console.log('cliquei no menu sanduiche...');
    //     this.renderer.addClass(this.headerMenuMobile.nativeElement, 'appear');
    // })

    const imgMenu = this.element.nativeElement.querySelector('#menu-bar-inside');

    this.renderer.listen(imgMenu, 'click', () => {
        console.log('Agora sim cliquei pra fechar..');
        this.renderer.removeClass(this.headerMenuMobile.nativeElement, 'appear');
    })

  }
  
//   hideMobileMenu(): void {
//     console.log('cliquei para fechar...');

//     this.renderer.removeClass(this.headerMenuMobile, 'appear');

//   }

  ngOnInit(): void {
    
  }


}
