import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  userId: any

  URLBase = 'http://localhost:8080'
  _urlDeleteSkills = '/user/skills/delete'
  _urlGetSkills = '/user/skills'
  _urlGetUsers = '/users'
  _urlGetuser = '/user'
  _urlCreate = '/user/create'
  _urlDelete = '/user/delete'
  _urlUpdate = '/user/update'

  constructor(private http: HttpClient) {

  }

  deleteSkill(id: any) {
    return this.http.delete<any>(`${this.URLBase}${this._urlDeleteSkills}/${id}`);
  }
  getAllSkills(): Observable<any> {
    return this.http.get<any>(`${this.URLBase}${this._urlGetSkills}`);
  }


  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.URLBase}${this._urlGetUsers}`);
  }

  getUser(id: number): Observable<any> {
    console.log(`${this.URLBase}${this._urlGetuser}/${id}`)
    return this.http.get<any>(`${this.URLBase}${this._urlGetuser}/${id}`);
  }

  createUser(user: User) {
    console.log(JSON.stringify(user))
    return this.http.post<any>(`${this.URLBase}${this._urlCreate}`, user)
  }

  editUser(user: User, id: number) {
    console.log('Edit User')
    return this.http.put<any>(`${this.URLBase}${this._urlUpdate}/${id}`, user)
  }
  updateUser(user: any, id: number) {
    console.log('Update User')
    return this.http.put<any>(`${this.URLBase}${this._urlUpdate}/${id}`, user).subscribe(e => { console.log(e) });;
  }

  deleteUser(id: any) {
    console.log('path: ', `${this.URLBase}${this._urlDelete}/${id}`)
    return this.http.delete(`${this.URLBase}${this._urlDelete}/${id}`);
  }

  setId(Id: any) {
    this.userId = Id

  }

  getId(): any {
    return this.userId;
  }

}
