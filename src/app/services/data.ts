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
    return this.http.get<Product[]>('items').pipe(
      catchError(this.handleError)
    );
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
  
     return this.http.post<Product>('items', newProduct).pipe(
       catchError(this.handleError)
     );
   }
 
 getItemById(id: number): Observable<Product> {
  return this.http.get<Product>(`items/${id}`).pipe(
    catchError(this.handleError) 
  );
}
  
  filterItems(searchTerm: string): Observable<Product[]> {
    const term = searchTerm?.trim().toLowerCase();

      if (!term.trim()) {
        return this.getAllProducts();
    }

    return this.http.get<Product[]>('items', {
      params: { q: term }}).pipe(catchError(this.handleError));
  }
  

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Невідома помилка!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Помилка клієнта: ${error.error.message}`;
    } else {
      errorMessage = `Код сервера: ${error.status}\nПовідомлення: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  } 
}
