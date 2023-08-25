import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, NgOptimizedImage, MatButtonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
    trigger('cardState', [
      state('open', style({
        width: '*'
      })),
      state('closed', style({
        position: 'fixed',
        zIndex: 2,
        width: '100%',
        height: '100%',
        bottom: 0,
        left: 0,
        right: 0,

      })),

      transition('open => closed', [
        animate('.5s ease-in-out')
      ]),
      transition('closed => open', [
        animate('1s ease-in-out')
      ]),

    ])
  ]
})
export class CardsComponent {
  state = 'open';

  openCard() {
    this.state == 'open' ? this.state = 'closed' : this.state = 'open';
  }


}
