import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeCard } from '../models/home-card.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, MatButtonModule, MatTooltipModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product!: HomeCard;
}
