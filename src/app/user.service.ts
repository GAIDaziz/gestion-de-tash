import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  addUser(user:any): Observable<any>{
    let body = user;
    return this.http.post("http://localhost/backend_api/?url=register", body);
  }

}
