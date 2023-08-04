import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from "../components/header/header.component";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
  imports: [
    MatCardModule,
    HeaderComponent
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
