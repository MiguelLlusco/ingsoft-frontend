import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: any[] = [];
  orde: any[] = [];

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:8080/users/1/orders/2')
    .subscribe((data: any) => {
      this.order = data;
      this.orde[0] = data[0];
      console.log(this.order);
      console.log(this.orde);
      }
    )

   }

  ngOnInit(): void {
  }

}