import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];

  constructor(private http: HttpClient) { 
    
    this.http.get('http://localhost:8080/cartDetail')
    .subscribe((data: any) => {
      this.cart = data;
      console.log(this.cart);
      }
    )

   }

  ngOnInit(): void {
  }

}
