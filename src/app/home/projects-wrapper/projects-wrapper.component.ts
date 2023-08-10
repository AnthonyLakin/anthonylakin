import {AfterViewInit, Component, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsComponent} from "../../projects/cards/cards.component";

@Component({
  selector: 'app-projects-wrapper',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './projects-wrapper.component.html',
  styleUrls: ['./projects-wrapper.component.scss']
})
export class ProjectsWrapperComponent {



}
