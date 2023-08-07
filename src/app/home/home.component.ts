import {Component } from '@angular/core';
import {HomeHeadComponent} from "./home-head/home-head.component";
import {HomeBody1Component} from "./home-body1/home-body1.component";
import {MatListModule} from "@angular/material/list";
import {HomeBody2Component} from "./home-body2/home-body2.component";
import {FooterComponent} from "../components/footer/footer.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HomeHeadComponent,
    HomeBody1Component,
    MatListModule,
    HomeBody2Component,
    FooterComponent
  ]
})
export class HomeComponent {

  // @HostListener("click", ["$event"])
  // onClick() {
  //   console.log(window.scrollbars)
  // }

}



