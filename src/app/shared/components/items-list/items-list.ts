import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../core/product';
import { Data } from '../../../services/data';
import { HighlightDirective } from "../../../directives/highlight";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent, HighlightDirective, RouterModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit, OnDestroy { 
  
  products$: Observable<Product[]> | undefined;
  searchTerm: string = '';
  
  private subscription: Subscription = new Subscription();

  constructor(private dataService: Data) { }

  ngOnInit(): void {
    this.products$ = this.dataService.getAllProducts();
  }

  onSearch(): void {
    this.products$ = this.dataService.filterItems(this.searchTerm);
  }

  onSelect(product: Product): void {
    console.log('Selected product:', product);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}