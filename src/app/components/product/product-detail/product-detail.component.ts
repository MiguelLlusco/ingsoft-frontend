import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any[] = [];
  productId: any[] = [];

  toCartAdd = {
    qtty: parseInt(''),
    cartId: 1,
    productId: '',

  }

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(params => {
      this.productId = [parseInt(params['productId'])]
      console.log(params['productId']);
      console.log(this.productId)
    })

    this.http.get('http://localhost:8080/products/detail/' + this.productId)
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product[0]);
      }
    )
   }

  ngOnInit(): void {
  }


  addToCart( toCart: NgForm ){

    console.log(toCart)
    this.toCartAdd.qtty = parseInt(toCart.value.qtty);
    this.toCartAdd.productId = this.productId[0];
    console.log(this.toCartAdd)

    this.http.post('http://localhost:8080/cartDetail', this.toCartAdd)
      .subscribe((data: any) => {
        this.toCartAdd = data;
        console.log(this.toCartAdd);
      })

  }

}
