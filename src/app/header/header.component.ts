import { Component, EventEmitter, Output } from '@angular/core';

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
    `]
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}
