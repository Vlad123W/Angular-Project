import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemsListComponent } from '../shared/components/items-list/items-list';
import { ItemCardComponent } from '../shared/components/item-card/item-card';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, ItemsListComponent],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {
    appName = 'Модний одяг';
}