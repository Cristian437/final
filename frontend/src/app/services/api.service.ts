import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para probar la conexión con el backend
  getTestMessage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
