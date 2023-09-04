import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from "../components/header/header.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {CardsComponent} from "./cards/cards.component";
import {FooterComponent} from "../components/footer/footer.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {trigger, transition, group, query, style, animate, state} from '@angular/animations';

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
        NavbarComponent,
        RouterOutlet
    ],
    standalone: true,
    animations: [
      trigger('routeAnimations', [
        state('open', style({
          bottom: 0
        })),
        state('closed', style({
          bottom: '*'

        })),
        transition('* <=> *', [
          animate('.5s ease-in-out')
        ]),

      ])
    ]
})
export class ProjectsComponent implements AfterViewInit{

  constructor(private elementRef: ElementRef) {
  }

  dataTitle = "Projects";

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'var(--black)';
  }

  state: any;
  checkState(msg: any){
    // alert(msg);
    // this.state = msg;
    console.log(this.state)
  }

}
