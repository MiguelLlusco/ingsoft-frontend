import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  product: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/products')
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      }
    )

   }

  ngOnInit(): void {
  }

}
