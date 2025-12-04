import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'users'; 

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          const token = 'fake-jwt-token-' + Math.random().toString(36).substr(2);
          
          localStorage.setItem('authToken', token);
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        } else {
          throw new Error('Невірний логін або пароль');
        }
      })
    );
  }

  
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); 
  }
  
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}