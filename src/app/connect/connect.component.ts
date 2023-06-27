import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.css'],
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, MatIconModule]
})
export class ConnectComponent {

}
