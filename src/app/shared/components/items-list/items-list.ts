import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../core/product';
import { Data } from '../../../services/data';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit, OnDestroy { 
  
  products: Product[] = [];
  searchTerm: string = '';
  
  private subscription: Subscription = new Subscription();

  constructor(private dataService: Data) { }

  ngOnInit(): void {
    const sub = this.dataService.getItems().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        console.log('Отримано оновлений список товарів:', this.products);
      },
      error: (err) => console.error('Помилка отримання даних:', err)
    });

    this.subscription.add(sub);
  }

  onSearch(): void {
    this.dataService.filterItems(this.searchTerm);
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