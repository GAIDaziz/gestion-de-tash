
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }



  savePost(post: any): Observable<any> {
    let body = post;
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    return this.http.post('http://localhost/backend_api/?url=add_task', body, {headers: headers}) ;
  }
//recuperer la liste des task

  getAllTask(): Observable<any>{
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    return this.http.get('http://localhost/backend_api/?url=tasks', {headers: headers});
  }
}