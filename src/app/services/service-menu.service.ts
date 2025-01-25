import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceMenuService {
    private menuOpen = new BehaviorSubject<boolean>(false);
    menuOpen$: Observable<boolean> = this.menuOpen.asObservable(); 


  openMenu() {
    console.log('Menu aberto noo service...');
    this.menuOpen.next(true);
  }

  closeMenu() {
    console.log('Menu fechado no service...');
    this.menuOpen.next(false);
    console.log(`this.menuOpen.value no closeMenu do service ${this.menuOpen.value}`);
  }

  toggleMenu() {
    this.menuOpen.next(!this.menuOpen.getValue());
  }

}
