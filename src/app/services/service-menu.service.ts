import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceMenuService {
    private menuOpen = new BehaviorSubject<boolean>(false);
    menuOpen$: Observable<boolean> = this.menuOpen.asObservable(); 


  openMenu() {
    this.menuOpen.next(true);
  }

  closeMenu() {
    this.menuOpen.next(false);
  }

  toggleMenu() {
    this.menuOpen.next(!this.menuOpen.getValue());
  }

}
