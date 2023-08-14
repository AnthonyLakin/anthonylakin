import {AfterViewInit, Component, ElementRef, HostListener, Input} from '@angular/core';
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
export class HomeBody2Component implements AfterViewInit{

  constructor(
      private elRef:ElementRef
  ) {}

  @Input() columnNum: any;
  @Input() colSpan1: any;
  @Input() colSpan2: any;


  small() {
    this.columnNum = 1;
    this.colSpan1 = 0;
    this.colSpan2 = 1;

  }

  regular() {
    this.columnNum = 3;
    this.colSpan1 = 1;
    this.colSpan2 = 2;

  }

  ngAfterViewInit() {

    if (window.innerWidth <= 700) {
      this.small();
    } else {
      this.regular();

    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    if (event.target.innerWidth <= 700) {
      this.small();
    } else {
      this.regular();
    }
  }

}
