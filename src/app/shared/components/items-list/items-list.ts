import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card';
import { Product } from '../core/product';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
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
            url: '/assets/images/suit.jpg',
            alt: 'Класичний чоловічий костюм',
            width: 800,
            height: 1200
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
            url: '/assets/images/dress.jpg',
            alt: 'Вечірня сукня',
            width: 800,
            height: 1200
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
            url: '/assets/images/leather-jacket.jpg',
            alt: 'Шкіряна куртка',
            width: 800,
            height: 1200
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
            url: '/assets/images/coat.jpg',
            alt: 'Кашемірове пальто',
            width: 800,
            height: 1200
        },
        isNew: true
    }
  ];
}