import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../../services/data'; 
import { Product } from '../core/product';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css'
})
export class ItemDetails implements OnInit {
  item: Product | undefined;
  
  private route = inject(ActivatedRoute);
  private itemsService = inject(Data);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      if (id) {
        this.item = this.itemsService.getItemById(id);
      }
    });
  }
}
