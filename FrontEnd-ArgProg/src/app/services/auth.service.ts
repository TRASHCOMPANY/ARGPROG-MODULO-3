import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URLBase = 'http://localhost:8080'
  _urlLogin = '/login'

  currentUserSubject: BehaviorSubject<any>

  constructor(private http: HttpClient) {
    console.log('el servicioestacorriendo')
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))

  }

  login(credential: any): Observable<any> {
    return this.http.post(`${this.URLBase}${this._urlLogin}`, credential).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data))
      console.log(data)
      return data

    }))

  }



}

