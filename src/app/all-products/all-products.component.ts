import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  inputCartNumber:number=0;

 
  
  constructor(private cartService:CartService) {
   }

   ngOnInit(): void {
  }


  getCartNumber():number{
    this.inputCartNumber=this.cartService.getCartNumber();
    return this.inputCartNumber;
  }

  
}
