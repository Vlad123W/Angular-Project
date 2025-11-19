import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
export class ItemsListComponent implements OnInit {
  
  products: Product[] = [];   
 
  constructor(private dataService: Data) { }

  ngOnInit(): void {
    this.products = this.dataService.getItems();
    
    console.log('Дані успішно завантажено з сервісу:', this.products);
  }

  searchTerm: string = '';
  originalProducts: Product[] = [...this.products];
  filteredProducts: Product[] = [...this.products];

  onSelect(product: Product): void {
    console.log('Selected product:', product);
  }

  onSearch() {
    const term = this.searchTerm?.trim().toLowerCase();

    if (!term) {
      this.products = [...this.originalProducts];
      return;
    }

    this.products = this.originalProducts.filter(p =>
      (p.name || '').toLowerCase().includes(term) ||
      (p.category || '').toLowerCase().includes(term)
    );
  }
}