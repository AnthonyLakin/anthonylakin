import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
  imports: [
    HeaderComponent
  ],
  standalone: true
})
export class MoreComponent {
  dataTitle = "Coming Soon";
}
