import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

    login(user) {
      return this.http.post(`${environment.apiUrl}/api/Customer`, user);
    }

    deletelogin(id) {
      return this.http.delete(`${environment.apiUrl}/api/${id}`);
  }
}
