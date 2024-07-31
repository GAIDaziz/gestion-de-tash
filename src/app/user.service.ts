import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from './TaskModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  addUser(user:any): Observable<any>{
    let body = user;
    return this.http.post("http://localhost/backend_api/?url=register", body);
  }
  login(user:any): Observable<any>{
    let body = user;
    return this.http.post('http://localhost/backend_api/?url=login', body);
  }

  //ajout post 

  /* savePost(post: any): Observable<any> {
    let body = post;
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    return this.http.post('http://localhost/backend_api/?url=add_task ', body, {headers: headers});

} */
/* //recuperer la liste des posts
getAllPost(): Observable<any>{
  return this.http.get('http://localhost/backend_api/?url=tasks');
}

//delette post 
deletePost(id: number): Observable<any>{
  return this.http.get(`http://localhost/backend_api/?url=remove_task&id=id_de_la_tache `);
} */

//  modifier un post
/* updatePost(data:taskModel):Observable<any>{
  let token = localStorage.getItem('token');
  let headers = new HttpHeaders({
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  });
  return this.http.post(`http://localhost/backend_api/?url=update_task&id=id_de_la_tache `, data, { headers: headers });
}

 */
}
