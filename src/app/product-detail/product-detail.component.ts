import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeCard } from '../models/home-card.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  // Injecting Services
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);

  id!: string;
  card!: HomeCard;
  paramSubscription!: Subscription;
  productSubscription!: Subscription;

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((params: Params) => {
      this.id = params['productId'];
    });

    this.productSubscription = this.productService
      .getSingleProduct(this.id)
      .subscribe((product) => {
        this.card = product;
      });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
  }
}
