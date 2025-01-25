import { Component, HostListener } from '@angular/core';
import { ServiceMenuService } from './services/service-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
