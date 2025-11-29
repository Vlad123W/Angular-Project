import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../shared/components/core/product';
@Injectable({
  providedIn: 'root'
})
export class Data {
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

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  getItems(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  filterItems(searchTerm: string): void {
    const term = searchTerm?.trim().toLowerCase();

    if (!term) {
      this.productsSubject.next(this.products);
    } else {
      const filtered = this.products.filter(p =>
        (p.name || '').toLowerCase().includes(term) ||
        (p.category || '').toLowerCase().includes(term)
      );
      this.productsSubject.next(filtered);
    }
  }
  
}
