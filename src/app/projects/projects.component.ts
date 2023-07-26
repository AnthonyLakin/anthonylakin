import { Component } from '@angular/core';
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
export class ProjectsComponent {

}
