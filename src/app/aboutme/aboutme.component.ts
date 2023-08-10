import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {NavbarComponent} from "../components/navbar/navbar.component";

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss'],
    standalone: true,
  imports: [HeaderComponent, FooterComponent, MatGridListModule, NavbarComponent]
})
export class AboutmeComponent implements AfterViewInit{

  constructor(private elementRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'var(--bgColor)'
  }

  dataTitle = "All About My Work";

}
