import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";



@Component({
  selector: 'app-home-head',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatGridListModule],
  templateUrl: './home-head.component.html',
  styleUrls: ['./home-head.component.scss']
})

export class HomeHeadComponent {

  @ViewChild("topLayer") topLayer!: ElementRef;
  @ViewChild("midLayer") midLayer!: ElementRef;
  @ViewChild("backLayer") backLayer!: ElementRef;


  @HostListener("document:scroll") scrollHandler() {
    let scrollY = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.clientHeight;
    // console.log(scrollY)
    let topRate = - scrollY/7;
    let midRate = - scrollY/5;
    let slowRate = - scrollY/3;
    this.topLayer.nativeElement.style.setProperty('transform', 'translateY(' + -(topRate) + 'px');
    this.midLayer.nativeElement.style.setProperty('transform', 'translateY(' + -(midRate) + 'px');
    this.backLayer.nativeElement.style.setProperty('transform', 'translateY(' + -(slowRate) + 'px');
    // if (scrollY/scrollHeight > .15) {
    //   this.midLayer.nativeElement.style.setProperty('opacity', 1.3- (scrollY/scrollHeight));
    // }

  }

}
