import {AfterViewInit, Component, ElementRef} from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@Component({
  selector: 'app-ooops',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule],
  templateUrl: './ooops.component.html',
  styleUrls: ['./ooops.component.scss']
})
export class OoopsComponent implements AfterViewInit{

  constructor(private elementRef: ElementRef, private location: Location) {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'var(--primaryLight)'
  }

  goBack() {
    this.location.back();
  }

}
