import { Routes } from '@angular/router';
import { ItemsListComponent } from './shared/components/items-list/items-list'; 
import { ItemDetails } from './shared/components/item-details/item-details'; 
import { ItemForm } from './item-form/item-form';
import { LoginComponent } from './login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/:id', component: ItemDetails },
  { path: 'add-item', component: ItemForm },
  { path: 'login', component: LoginComponent },
  { 
    path: 'add-item', 
    component: ItemForm,
    canActivate: [authGuard]
  }
];