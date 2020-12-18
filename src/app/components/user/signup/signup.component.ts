import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup= {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    neighbourId: 0,
    street: '',
    number: '',
    reference: ''
  }

  neighbour: any[] = [];

  alert = false;
  //modal: any[] = [];

  constructor( private http: HttpClient, private router: Router ) { 
    
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
    console.log(this.alert)
  }

  signUpUser(user: NgForm) {

    if (user.invalid || user.value.password!==user.value.password_confirm) {
      Object.values(user.controls).forEach(control => {
        control.markAsTouched();
      })
      this.alert = true;
      console.log(this.alert)
    } else {
      this.alert = false;
      console.log(this.alert)
      this.signup.firstname = user.value.firstname;
      this.signup.lastname = user.value.lastname;
      this.signup.phone = user.value.phone;
      this.signup.email = user.value.email;
      this.signup.password = user.value.password;
      this.signup.neighbourId = parseInt(user.value.neighbourId);
      this.signup.street = user.value.street;
      this.signup.number = user.value.number;
      this.signup.reference = user.value.reference;

      console.log(this.signup);
      console.log(user)
      console.log(this.alert)

    /*this.http.post('http://localhost:8080/users/signup',this.signup)
          .subscribe((data: any) => {
            this.signup = data;
            console.log(this.signup);
          })*/
      
          this.router.navigate(['/home']);
    }    
  }
}
