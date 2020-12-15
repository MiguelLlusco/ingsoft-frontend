import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any[] = [];
  users: any[] = [];

  constructor(private http: HttpClient, private _userService: UserService) { 

    this.http.get('http://localhost:8080/users/1')
      .subscribe((data: any) => {
        this.user = data;
        console.log(this.user);
        }
      ) 
   }
  
  ngOnInit(): void {

    this.users = this._userService.getUsers();
    console.log(this.users)

  }

}
