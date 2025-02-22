import { Component, OnInit } from '@angular/core';
import { LogoWhatsComponent } from '../logo-whats/logo-whats.component';

@Component({
    selector: 'app-page-four',
    templateUrl: './page-four.component.html',
    styleUrls: ['./page-four.component.css'],
    standalone: true,
    imports: [LogoWhatsComponent]
})
export class PageFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
