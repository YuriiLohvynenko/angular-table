import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url: string = 'https://jsonplaceholder.typicode.com/posts/';
  loggedInUser: any;
  constructor(private http: HttpClient) { }

  updateUser(user: any) {
    return this.http.post(this.url, { id: user.id, status: user.status });
  }
}
