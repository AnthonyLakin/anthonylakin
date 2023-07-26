import {Component, HostListener} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {FullScreenHeaderComponent} from "../components/full-screen-header/full-screen-header.component";
import {Text2Component} from "../components/text2/text2.component";
import {CardsComponent} from "../projects/cards/cards.component";
import {ThreeGraphicComponent} from "../components/three-graphic/three-graphic.component";

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.css'],
    standalone: true,
    imports: [MatRippleModule, FullScreenHeaderComponent, Text2Component, CardsComponent, ThreeGraphicComponent]
})
export class AboutmeComponent {

  @HostListener("click", ["$event"])
  onClick() {
    console.log(window.scrollbars)
  }

}
