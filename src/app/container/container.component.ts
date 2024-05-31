import { Component, input } from '@angular/core';
// import { Console } from 'console';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContianerComponent{

    name: string = "";
    addtocart: number = 0;
   
    listmenu: string [] = [' Download App  ',' Create Account ',' Sign IN ','Guest User'];
  
    product = {
    name : 'iphone 20',
    price: 999,
    color: 'red',
    discount: 25.55,
    inStock : 10,
    image : '/assets/iphone2.jpg'
  }
  
  getDiscoountedprice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }
  
  onnameChange(event: any) {
      this.name = event.target.value;
    }
  
  
  decrement() {
    if(this.addtocart >0 ){
    this.addtocart--;}
  }
  increment(){
    if(this.addtocart < this.product.inStock) {
    this.addtocart++ }
  }

  // shop code form here

  SearchText: string = '';
  setSearchText(value:string){
    this.SearchText = value;
  }

}
