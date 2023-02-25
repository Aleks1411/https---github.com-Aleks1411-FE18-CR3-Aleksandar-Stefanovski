import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { products, IProduct} from '../product-name';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
piza: Array<IProduct> = products;


constructor(private cs: CartService){

}
 
addToCart(val:IProduct){
  alert("You order is added");
  this.cs.addToCart(val);
}

available: boolean = true;
  changeValue(valid: boolean) {
    this.available = true;
  }

}

  
