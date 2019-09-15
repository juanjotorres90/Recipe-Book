import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

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

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
