/**
  * @cwb 
  * [UserService] : C.R.U.D Operations 
  */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class UserService { 

  constructor(private _http: Http) { }

  create(user: User) {
      return this._http.post("/user", user) 
      .map(data => data.json()).toPromise()
    
  }

  destroy(user: User) {
     return this._http.delete("/user/"+user._id)
     .map(data => data.json()).toPromise()
  }

  update(user: User) {
    return this._http.put("/user/"+user._id, user)
    .map(data => data.json()).toPromise()
  }

  // Gets List
  getUsers() {
    return this._http.get("/user")
    .map(data => data.json()).toPromise()
  }
  
  // Get single User
  // TODO: Attach UserDetail to User
  getUser(user: User) {
    return this._http.get("/users"+user._id)
    .map(data => data.json()).toPromise()
  }

}
