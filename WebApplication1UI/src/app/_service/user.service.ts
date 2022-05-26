import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/api/Customer`);
    }

    register(user) {
        return this.http.post(`${environment.apiUrl}/api/Customer`, user);
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/api/${id}`);
    }

    login(user): Observable<any> {
      return this.http.post(`${environment.apiUrl}/api/Login`, user, { responseType: 'text'});
    }

    deletelogin(id) {
      return this.http.delete(`${environment.apiUrl}/api/${id}`);
  }
}
