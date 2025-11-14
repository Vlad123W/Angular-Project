import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../core/product';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent {
    
  products: Product[] = [
    {
        id: 1,
        name: 'Класичний костюм',
        price: 5999,
        category: 'men',
        description: 'Елегантний чоловічий костюм темно-синього кольору',
        image: {
            url: 'suit.jpg',
            alt: 'Класичний чоловічий костюм',
            width: 300,
            height: 400
        },
        isNew: true
    },
    {
        id: 2,
        name: 'Вечірня сукня',
        price: 3999,
        category: 'women',
        description: 'Довга вечірня сукня з мереживом',
        image: {
            url: 'dress.jpg',
            alt: 'Вечірня сукня',
            width: 300,
            height: 400
        },
        isNew: true
    },
    {
        id: 3,
        name: 'Шкіряна куртка',
        price: 4599,
        category: 'men',
        description: 'Стильна шкіряна куртка чорного кольору',
        image: {
            url: 'leather-jacket.jpg',
            alt: 'Шкіряна куртка',
            width: 300,
            height: 400
        },
        isNew: false
    },
    {
        id: 4,
        name: 'Кашемірове пальто',
        price: 6999,
        category: 'women',
        description: 'Елегантне пальто з кашеміру бежевого кольору',
        image: {
            url: 'coat.jpg',
            alt: 'Кашемірове пальто',
            width: 300,
            height: 400
        },
        isNew: true
    }
  ];

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