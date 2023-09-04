import {AfterViewInit, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatRippleModule} from "@angular/material/core";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, NgOptimizedImage, MatButtonModule, RouterLink, RouterLinkActive, RouterOutlet, MatRippleModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: []
})
export class CardsComponent {

  // @Input() columnNum: any;
  //
  // small() {
  //   this.columnNum = 1;
  // }
  //
  // regular() {
  //   this.columnNum = 2;
  // }
  //
  // ngAfterViewInit() {
  //   if (window.innerWidth <= 700) {
  //     this.small();
  //   } else {
  //     this.regular();
  //
  //   }
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: { target: { innerWidth: any; }; }) {
  //   if (event.target.innerWidth <= 700) {
  //     this.small();
  //   } else {
  //     this.regular();
  //   }
  // }
  @Output() childEvent = new EventEmitter();
  triggerRoute() {
    this.childEvent.emit('open');

  }


}
