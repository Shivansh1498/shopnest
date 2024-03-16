import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeCard } from '../models/home-card.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http: HttpClient = inject(HttpClient);

  getAllProducts(): Observable<HomeCard[]> {
    return this.http.get<HomeCard[]>('https://fakestoreapi.com/products/');
  }
}
