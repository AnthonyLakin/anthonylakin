import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.css'],
    standalone: true,
  imports: [HeaderComponent]
})
export class AboutmeComponent {

  dataTitle = "All About My Work";

}
