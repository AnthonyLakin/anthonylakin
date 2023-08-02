import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    imports: [
        MatCardModule
    ],
    standalone: true
})
export class ProjectsComponent implements AfterViewInit{

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white'
  }

}
