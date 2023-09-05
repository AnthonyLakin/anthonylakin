import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  animations: [
    trigger('routeAnimations', [
      state('open', style({
        bottom: 0,
        display: 'block'
      })),
      state('closed', style({
        bottom: '*',
        display: '*'

      })),
      transition('* <=> *', [
        animate('.3s cubic-bezier(0.06, 0.38, 0.11, 0.88)')
      ]),

    ])
  ]
})
export class NavbarComponent {

}

