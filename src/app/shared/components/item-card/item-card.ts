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
}