import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { products, IProduct } from '../product-name';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
product: IProduct = {} as IProduct;
id: number = 0

constructor(private route: ActivatedRoute){ }



ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
   this.id = +params['id'];
   this.product = products[this.id];
  

 });

}
}

