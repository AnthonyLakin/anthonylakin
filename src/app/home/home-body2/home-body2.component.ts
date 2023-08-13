import {AfterViewInit, Component, HostListener, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-home-body2',
  standalone: true,
  imports: [CommonModule, MatListModule, MatGridListModule, NgOptimizedImage],
  templateUrl: './home-body2.component.html',
  styleUrls: ['./home-body2.component.scss']
})
export class HomeBody2Component {



}
