import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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

  itemValue= {
    cartDetailId: 0
  }

  constructor(private http: HttpClient, private router: Router ) { 
    
    this.http.get('http://localhost:8080/cartDetail')
    .subscribe((data: any) => {
      this.cart = data;
      console.log(this.cart);
      }
    )

    this.http.get('http://localhost:8080/cart')
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

    if (order.invalid) {
      console.log(order.invalid)
    } else {
      this.orderCreate.neighbourId = parseInt(order.value.neighbourId)
    this.orderCreate.street = order.value.street
    this.orderCreate.number = order.value.number
    this.orderCreate.reference = order.value.reference
    this.orderCreate.cartId = parseInt(this.cartTotal[0].cartId)
    this.orderCreate.status = 1
    this.orderCreate.state = 1
    console.log(this.orderCreate)
    
    this.http.post('http://localhost:8080/orders',this.orderCreate)
          .subscribe((data: any) => {
            this.orderCreate = data;
            console.log(this.orderCreate);
          })
      
      
          this.router.navigate(['/home']);
    } 
    
  }

  deleteItem(item: number){
    console.log(item)

    this.itemValue.cartDetailId = item

    this.http.patch('http://localhost:8080/cartDetail/' + item, this.itemValue).subscribe(data => {
      console.log(data);
    });
    window.location.reload();
  }

}
