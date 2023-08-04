import {AfterViewInit, Component, ElementRef} from '@angular/core';
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

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black'
  }

}
