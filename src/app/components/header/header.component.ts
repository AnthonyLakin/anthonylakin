import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BarsComponent} from "../bars/bars.component";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [CommonModule, BarsComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerTitle: any;

}
