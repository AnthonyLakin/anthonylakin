import {AfterViewInit, Component, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component {

  // constructor(private elementRef: ElementRef) {
  // }
  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'red'
  // }

}
