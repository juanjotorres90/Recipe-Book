import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        .dropdown-menu {
            min-width: fit-content;
        }
        .dropdown-item {
            width: auto;
            padding: 0;
        }
        a {
          cursor: pointer;
        }
    `]
})
export class HeaderComponent {
}
