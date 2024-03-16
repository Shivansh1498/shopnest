import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import cardData from '../../../data';
import { HomeCard } from '../models/home-card.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  dummyData: HomeCard[] = cardData;
}
