import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {NavbarComponent} from "../components/navbar/navbar.component";

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  standalone: true
})
export class MoreComponent {
  dataTitle = "Coming Soon";
}
