import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-home-body1',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatListModule],
  templateUrl: './home-body1.component.html',
  styleUrls: ['./home-body1.component.scss']
})
export class HomeBody1Component implements AfterViewInit{

  constructor(
    private elRef:ElementRef
  ) {}

  @Input() columnNum: any;
  @Input() colSpan1: any
  @Input() colSpan2: any;
  @Input() colSpan3: any;


  small() {
    this.columnNum = 1;
    this.colSpan1 = 1;
    this.colSpan2 = 0;
    this.colSpan3 = 1;
  }

  regular() {
    this.columnNum = 3;
    this.colSpan1 = 2;
    this.colSpan2 = 3;
    this.colSpan3 = 3;
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
