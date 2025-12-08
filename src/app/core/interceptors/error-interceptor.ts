import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modalStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modalStateErrors.push(error.error.errors[key]);
                  }
                }
                this.toastr.error(modalStateErrors.flat().join('\n'), error.error.message || 'Помилка валідації');
              } else {
                this.toastr.error(error.error.message || 'Неправильний запит', error.status.toString());
              }
              break;

            case 401:
              this.toastr.warning('Будь ласка, увійдіть у систему', 'Не авторизовано');
              break;
            
            case 403:
              this.toastr.error('У вас немає доступу', 'Заборонено');
              break;

            case 404:
              this.toastr.error('Ресурс не знайдено', '404 Not Found');
              break;

            case 500:
              this.toastr.error('Помилка сервера. Спробуйте пізніше', 'Server Error');
              break;

            default:
              this.toastr.error('Щось пішло не так', 'Помилка');
              console.log(error);
              break;
          }
        }
        return throwError(() => error);
      })
    );
  }
}