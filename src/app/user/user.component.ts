/** @cwb
  * User Component - Main Component for User Data 
  * <params>users</params>
  * constructor - users from @User Class
  **/
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // can also write the following like ...
  // users: User [] = [] ;
  users: Array<User> = [];
  constructor(private _userService: UserService) { }

  ngOnInit() {

    this.getUsers()
  
  }

  // TODO: create a method to update getUsers || Array<User> -- 8.13.17
  getUsers() {
    this._userService.getUsers()
    .then(users => this.users = users)
  //this.route.snapshot.data['name']  <-- eventually adding Router
   console.log("Data via params: ",this.users['id']);
  }
}
