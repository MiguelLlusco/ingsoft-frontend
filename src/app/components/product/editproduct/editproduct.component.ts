import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product: any[] = [];
  producto: any[] = [];
  
  
  
  productupdate = {
    price: parseFloat(''),
    stock: parseInt(''),
    storeAvailable: true,
    deliveryAvailable: true,
  }
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    
    this.activatedRoute.params.subscribe(params => {
      this.producto = [parseInt(params['productId'])]
      console.log(params['productId']);
      console.log(this.producto)
    })

    this.http.get('http://localhost:8080/products/'+this.producto)
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      console.log(this.producto);
      }
    )

   }

  ngOnInit(): void {
  }
  updateProduct(prod: NgForm){
    if(prod.value.storeAvailable === "true")
    {
      if(prod.value.deliveryAvailable === "true")
      {
        
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= true
        this.productupdate.deliveryAvailable= true
        
        this.http.patch('http://localhost:8080/products/'+this.producto,this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
      else{
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= true
        this.productupdate.deliveryAvailable= false
        
        this.http.patch('http://localhost:8080/products/'+this.producto,this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
    }
    else
    {
      if(prod.value.deliveryAvailable === "true")
      {
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= false
        this.productupdate.deliveryAvailable= true
        
        this.http.patch('http://localhost:8080/products/'+this.producto,this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
      else{
        this.productupdate.price= prod.value.price
        this.productupdate.stock= prod.value.stock
        this.productupdate.storeAvailable= false
        this.productupdate.deliveryAvailable= false
        
        
        this.http.patch('http://localhost:8080/products/'+this.producto,this.productupdate)
        .subscribe((data: any) => {
          this.productupdate = data;
          console.log(this.productupdate);
        })
      }
    }
  }

}
