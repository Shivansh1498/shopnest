import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HomeCard } from '../models/home-card.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // Injecting Services
  productService: ProductService = inject(ProductService);

  cardData!: HomeCard[];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.cardData = data;
    });
  }
}
