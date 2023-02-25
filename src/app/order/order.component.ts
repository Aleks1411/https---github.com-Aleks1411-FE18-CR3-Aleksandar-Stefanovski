import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../product-name';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cart:Array<IProduct> =[];
  constructor(private cs:CartService){}

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }
}
