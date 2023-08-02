import {Component } from '@angular/core';
import {HomeHeadComponent} from "./home-head/home-head.component";
import {HomeBody1Component} from "./home-body1/home-body1.component";
import {MatListModule} from "@angular/material/list";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HomeHeadComponent,
    HomeBody1Component,
    MatListModule
  ]
})
export class HomeComponent {

  // @HostListener("click", ["$event"])
  // onClick() {
  //   console.log(window.scrollbars)
  // }

}



