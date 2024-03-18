import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeCard } from '../models/home-card.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../services/product.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  // Injecting Services
  productService: ProductService = inject(ProductService);

  productSubscription!: Subscription;

  cardData!: HomeCard[];

  ngOnInit(): void {
    this.productSubscription = this.productService
      .getAllProducts()
      .subscribe((data) => {
        this.cardData = data;
      });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
