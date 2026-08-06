import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    console.log(this.activatedRoute);
  }
}
