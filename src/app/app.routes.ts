import { Routes } from '@angular/router';
import { ItemsListComponent } from './shared/components/items-list/items-list'; 
import { ItemDetails } from './shared/components/item-details/item-details'; 
import { ItemForm } from './item-form/item-form';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/:id', component: ItemDetails },
  { path: 'add-item', component: ItemForm }
];