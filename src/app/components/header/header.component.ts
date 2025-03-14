import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewChildren, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { ServiceMenuService } from 'src/app/services/service-menu.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [AsyncPipe]
})

export class HeaderComponent implements OnInit {
    isMenuOpen: boolean = false;
 
    constructor(public menuService: ServiceMenuService) { }

  
    ngOnInit(): void {
        this.menuService.menuOpen$.subscribe((isOpen) => {
            this.isMenuOpen = isOpen;
        })
    }

    openMenu() {
        this.menuService.openMenu();
    }

    closeMenu() {
        this.menuService.closeMenu();
    }

    onMenuClick(event: MouseEvent) {
        event.stopPropagation();
    }

}
