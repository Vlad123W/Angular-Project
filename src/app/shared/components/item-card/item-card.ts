import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../core/product';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() product!: Product;
 
  getCategoryColor(): string {
  switch(this.product.category.toLowerCase()) {
    case 'men': return '#90caf9';
    case 'women': return '#a5d6a7';
    default: return '#e0e0e0';
  }
}
}

