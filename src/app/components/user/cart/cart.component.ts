import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  cartTotal: any[] = [];
  neighbour: any[] = [];
  
  orderCreate = {
    neighbourId: 0,
    street: '',
    number: '',
    reference: '',
    cartId: 0,
    status: 0,
    state: 0,
  }


  constructor(private http: HttpClient) { 
    
    this.http.get('http://localhost:8080/cartDetail')
    .subscribe((data: any) => {
      this.cart = data;
      console.log(this.cart);
      }
    )

    this.http.get('http://localhost:8080/cart/1')
    .subscribe((data: any) => {
      this.cartTotal = data;
      console.log(this.cartTotal);
      }
    )

    this.http.get('http://localhost:8080/neighbour')
      .subscribe((data: any) => {
        this.neighbour = data;
        this.neighbour.unshift({
          neighbourId: '',
          name: '[Seleccione una zona]'
        })
        console.log(this.neighbour);
        }
      ) 

   }

  ngOnInit(): void {
  }

  addOrder(order: NgForm) {
    this.orderCreate.neighbourId = parseInt(order.value.neighbourId)
    this.orderCreate.street = order.value.street
    this.orderCreate.number = order.value.number
    this.orderCreate.reference = order.value.reference
    this.orderCreate.cartId = 1
    this.orderCreate.status = 1
    this.orderCreate.state = 1
    console.log(this.orderCreate)
    this.http.post('http://localhost:8080/orders',this.orderCreate)
          .subscribe((data: any) => {
            this.orderCreate = data;
            console.log(this.orderCreate);
          })
    
  }

}
