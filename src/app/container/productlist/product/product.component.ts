import { NumberSymbol } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() //child component se parent ka communication bannata hai

 product:{
  id: number,
  name: string;
  description: string,
  brand: string;
  category:string,
  gender:string,
  size: number[],
  color: string [],
  price: number,
  discountPrice ?: number,
  is_in_inventory: boolean,
  items_left: number,
  imageURL:string,
  slug:string,
 };

}
