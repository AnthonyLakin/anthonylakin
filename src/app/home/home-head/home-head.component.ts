import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}

@Component({
  selector: 'app-home-head',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatGridListModule],
  templateUrl: './home-head.component.html',
  styleUrls: ['./home-head.component.css']
})
export class HomeHeadComponent {
  tiles: Tile[] = [
    {text: 'Tile 1', cols: 2, rows: 1 ,border: '3px double purple'},
    {text: 'Tile 2', cols: 2, rows: 1 ,border: '3px double red'},
    {text: 'Tile 3', cols: 2, rows: 1 ,border: '3px double skyblue'},
    {text: 'Tile 4', cols: 2, rows: 1 ,border: '3px double yellow'},
  ];
}
