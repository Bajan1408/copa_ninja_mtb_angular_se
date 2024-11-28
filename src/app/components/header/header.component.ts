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
  divTest: HTMLElement;
  listMenu: string = `<ul class="menu-li-mobile">
              <li class="item-li-menu-mobile"><a href="#">HOME</a></li>
              <li class="item-li-menu-mobile"><a href="#">RANKING</a></li>
              <li class="item-li-menu-mobile"><a href="#">GALERIA</a></li>
              <li class="item-li-menu-mobile"><a href="#">RESULTADOS</a></li>
              <li class="item-li-menu-mobile"><a href="https://www.ticketsports.com.br/e/6%C2%BA%20ETAPA%20DA%20COPA%20NINJA%20DE%20MTB%202024%20(final)-70251"  target="_blank" rel="noopener">INSCRIÇÕES</a></li>
              <li class="item-li-menu"><a href="#">CONTATO</a></li>
          </ul>`;
 
  constructor(private renderer: Renderer2, private element: ElementRef) { 
    this.divTest = this.renderer.createElement('div');
  }

  createUlWithLis(elem: HTMLElement):void {
    const ul = this.renderer.createElement('ul');
    this.renderer.addClass(ul, 'menu-li-mobile');
    
    const li1 = this.renderer.createElement('li');
    this.renderer.addClass(li1, 'item-li-menu-mobile');
    const a1 = this.renderer.createElement('a');
    this.renderer.setAttribute(a1, 'href', '#');
    this.renderer.setProperty(a1, 'innerHTML', 'HOME');
    this.renderer.appendChild(li1, a1);


    const li2 = this.renderer.createElement('li');
    this.renderer.addClass(li2, 'item-li-menu-mobile');
    const a2 = this.renderer.createElement('a');
    this.renderer.setAttribute(a2, 'href', '#');
    this.renderer.setProperty(a2, 'innerHTML', 'RANKING');
    this.renderer.appendChild(li2, a2);

    const li3 = this.renderer.createElement('li');
    this.renderer.addClass(li3, 'item-li-menu-mobile');
    const a3 = this.renderer.createElement('a');
    this.renderer.setAttribute(a3, 'href', '#');
    this.renderer.setProperty(a3, 'innerHTML', 'GALERIA');
    this.renderer.appendChild(li3, a3);

    const li4 = this.renderer.createElement('li');
    this.renderer.addClass(li4, 'item-li-menu-mobile');
    const a4 = this.renderer.createElement('a');
    this.renderer.setAttribute(a4, 'href', '#');
    this.renderer.setProperty(a4, 'innerHTML', 'RESULTADOS');
    this.renderer.appendChild(li4, a4);

    const li5 = this.renderer.createElement('li');
    this.renderer.addClass(li5, 'item-li-menu-mobile');
    const a5 = this.renderer.createElement('a');
    this.renderer.setAttribute(a5, 'href', 'https://www.ticketsports.com.br/e/6%C2%BA%20ETAPA%20DA%20COPA%20NINJA%20DE%20MTB%202024%20(final)-70251');
    this.renderer.setAttribute(a5, 'target', '_blank');
    this.renderer.setProperty(a5, 'innerHTML', 'INSCRIÇÕES');
    this.renderer.appendChild(li5, a5);

    const li6 = this.renderer.createElement('li');
    this.renderer.addClass(li6, 'item-li-menu-mobile');
    const a6 = this.renderer.createElement('a');
    this.renderer.setAttribute(a6, 'href', '#');
    this.renderer.setProperty(a6, 'innerHTML', 'CONTATO');
    this.renderer.appendChild(li6, a6);

    this.renderer.appendChild(ul, li1);
    this.renderer.appendChild(ul, li2);
    this.renderer.appendChild(ul, li3);
    this.renderer.appendChild(ul, li4);
    this.renderer.appendChild(ul, li5);
    this.renderer.appendChild(ul, li6);

    this.renderer.appendChild(elem, ul);
  }


  testClick():void {
    const asideMenu = this.element.nativeElement.querySelector('#menu');
    const imgMenu = this.renderer.createElement('img');
    imgMenu.setAttribute('src', '../../../assets/img/menu_bar_close_white.svg');
    imgMenu.setAttribute('id', 'menu_bar_inside');
    
    this.renderer.addClass(this.divTest, 'div_test');
    this.renderer.appendChild(this.divTest, imgMenu);
    
    this.createUlWithLis(this.divTest);

    this.renderer.appendChild(asideMenu, this.divTest);

    this.renderer.listen(asideMenu, 'click', (evt) => {
        if(evt.target.id === 'menu_bar_inside') {
            console.log(`Cliquei no elemento ${evt.target}`);
            this.testClickTwo();
        }
        
    })
  }
  
  testClickTwo(): void {
    console.log('cliquei para fechar...');

    const menuBarClose = this.element.nativeElement.querySelector('#menu_bar_inside');
        if(menuBarClose) {
            menuBarClose.remove();
        }

    const ul = [...this.element.nativeElement.querySelectorAll('li')];

    ul.forEach(el => {
        el.remove();
    })
    
    this.divTest.remove();
  }

  ngOnInit(): void {

  }


}
