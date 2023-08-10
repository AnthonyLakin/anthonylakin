import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from "../components/header/header.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {CardsComponent} from "./cards/cards.component";
import {FooterComponent} from "../components/footer/footer.component";
import {NavbarComponent} from "../components/navbar/navbar.component";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
  imports: [
    MatCardModule,
    HeaderComponent,
    MatGridListModule,
    CardsComponent,
    FooterComponent,
    NavbarComponent
  ],
    standalone: true
})
export class ProjectsComponent implements AfterViewInit{

  constructor(private elementRef: ElementRef) {
  }

  dataTitle = "Projects";

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'var(--bgColor)'
  }

}
