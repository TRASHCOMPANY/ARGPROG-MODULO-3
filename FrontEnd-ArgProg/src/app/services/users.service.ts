import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})

export class UsersService {


  URLBase = 'http://localhost:8080'
  _urlGetUsers = '/users'
  _urlGetuser = '/user'
  _urlCreate = '/user/create'
  _urlDelete = '/user/delete'
  _urlUpdate = '/user/update'
 
  constructor(private http: HttpClient) {

  }

  getAllUsers(): Observable<any> {
  return this.http.get<any>(`${this.URLBase}${this._urlGetUsers}`);
  }
       
  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.URLBase}${this._urlGetuser}/${id}`);
  }
 
  createUser(user: User) {
    console.log(JSON.stringify(user))
    return this.http.post<any>(`${this.URLBase}${this._urlCreate}`,user).subscribe(e=>{console.log(e)});
  }

  editUser(id: number, user: any) {
    return this.http.post(`${this._urlUpdate}/${id}`, user);
  }
  updateUser(id: number, user: any) {
    return this.http.put<any>(`${this._urlUpdate}/${id}`, user);
  }

  deleteUser(id:any) {
    console.log('path: ',`${this.URLBase}${this._urlDelete}/${id}`)
    return this.http.delete(`${this.URLBase}${this._urlDelete}/${id}`);


  }
}
