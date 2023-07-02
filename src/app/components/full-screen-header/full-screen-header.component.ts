import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatRippleModule} from "@angular/material/core";
import {Text2Component} from "../text2/text2.component";

@Component({
  selector: 'app-full-screen-header',
  standalone: true,
  imports: [CommonModule, MatRippleModule, NgOptimizedImage, Text2Component],
  templateUrl: './full-screen-header.component.html',
  styleUrls: ['./full-screen-header.component.scss']
})
export class FullScreenHeaderComponent implements AfterViewInit{

  @ViewChild("topLayer") topLayer!: ElementRef;
  @ViewChild("midLayer") midLayer!: ElementRef;
  @ViewChild("backLayer") backLayer!: ElementRef;
constructor(private elementRef: ElementRef) {
}
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black'
  }


  @HostListener("document:scroll") scrollHandler() {
    let scrollY = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.clientHeight;
    console.log(1.5 - (scrollY/scrollHeight))
    let topRate = - scrollY/10;
    let midRate = - scrollY/5;
    let slowRate = - scrollY/2;
    this.topLayer.nativeElement.style.setProperty('top', 50 + topRate + '%');
    this.midLayer.nativeElement.style.setProperty('transform', 'translateY(' + -(midRate) + 'px');
    this.backLayer.nativeElement.style.setProperty('transform', 'translateY(' + -(slowRate) + 'px');
    if (scrollY/scrollHeight > .15) {
      this.midLayer.nativeElement.style.setProperty('opacity', 1.3- (scrollY/scrollHeight));
    }

  }

}
