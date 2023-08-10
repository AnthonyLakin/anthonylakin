import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {HomeHeadComponent} from "./home-head/home-head.component";
import {HomeBody1Component} from "./home-body1/home-body1.component";
import {MatListModule} from "@angular/material/list";
import {HomeBody2Component} from "./home-body2/home-body2.component";
import {FooterComponent} from "../components/footer/footer.component";
import {ProjectsWrapperComponent} from "./projects-wrapper/projects-wrapper.component";
import {NavbarComponent} from "../components/navbar/navbar.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HomeHeadComponent,
    HomeBody1Component,
    MatListModule,
    HomeBody2Component,
    FooterComponent,
    ProjectsWrapperComponent,
    NavbarComponent
  ]
})
export class HomeComponent implements AfterViewInit{

  constructor(private elementRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000'
  }

}



