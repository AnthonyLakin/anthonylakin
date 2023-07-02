import {Component, HostListener} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {FullScreenHeaderComponent} from "../components/full-screen-header/full-screen-header.component";
import {Text2Component} from "../components/text2/text2.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgOptimizedImage, FullScreenHeaderComponent, Text2Component]
})
export class HomeComponent {

  @HostListener("click", ["$event"])
  onClick() {
    console.log(window.scrollbars)
  }

}



