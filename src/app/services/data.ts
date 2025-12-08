import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { Product } from '../shared/components/core/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Data {
  
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('items');
  }

  addItem(itemData: any): Observable<Product> {
     const newProduct = {
       name: itemData.name,
       description: itemData.description,
       price: itemData.price,
       category: itemData.category,
       isNew: true,
       image: {
         url: itemData.imageUrl, 
         alt: itemData.name,
         width: 300,
         height: 350
       }
     };
  
     return this.http.post<Product>('items', newProduct);
   }
 
 getItemById(id: number): Observable<Product> {
  return this.http.get<Product>(`items/${id}`);
}
  
  filterItems(searchTerm: string): Observable<Product[]> {
    const term = searchTerm?.trim().toLowerCase();

      if (!term.trim()) {
        return this.getAllProducts();
    }

    return this.http.get<Product[]>('items', {
      params: { q: term }});
  }

}
