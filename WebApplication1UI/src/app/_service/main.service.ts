import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable()
export class MainService{

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('../assets/data/products.json').pipe(map((response: any) =>response));
  }
  // getProducts(): any {
  //   return this.http.get('../assets/data/products.json').map(response => response.json());
  // }

}
