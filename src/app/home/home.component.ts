import {Component, HostListener} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage]
})
export class HomeComponent {

  @HostListener("click", ["$event"])
  onClick() {
    console.log(window.scrollbars)
  }

}



