import {Component } from '@angular/core';
import {HomeHeadComponent} from "./home-head/home-head.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HomeHeadComponent
  ]
})
export class HomeComponent {

  // @HostListener("click", ["$event"])
  // onClick() {
  //   console.log(window.scrollbars)
  // }

}



