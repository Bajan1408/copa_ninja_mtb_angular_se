import { Component, HostListener } from '@angular/core';
import { ServiceMenuService } from './services/service-menu.service';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CardOneComponent } from './components/card-one/card-one.component';
import { PhotosComponent } from './components/photos/photos.component';
import { CardTwoComponent } from './components/card-two/card-two.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PageFourComponent } from './components/page-four/page-four.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, MainComponent, CardOneComponent, PhotosComponent, CardTwoComponent, CarrouselComponent, PageFourComponent, FooterComponent, RouterOutlet]
})
export class AppComponent {
  title = 'copaNinjaMtb';

  constructor(private menuService: ServiceMenuService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if(target.closest('.menu_bar')) {
        return;
    }

    const clickedOutside = !target.closest('.header-menu-mobile');

    //Verifica se o clique foi fora do menu (classe appear)
    if(clickedOutside) {
        this.menuService.closeMenu(); //Fecha o menu através do serviço.. 
    } 
  }


}
