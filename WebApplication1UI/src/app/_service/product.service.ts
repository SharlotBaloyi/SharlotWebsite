import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  emptryCart() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('https://localhost:7163/api/Product');
  }
}
