import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http: HttpClient) { }

  addUser(data: any): Observable<any>{
    return this._http.post('https://localhost:7051/api/User', data);
  }

  updateUser(data: any, id:any): Observable<any>{
    return this._http.put(`https://localhost:7051/api/User/${id}`, data);
  }

  getUserList(pageNumber: number, pageSize: number): Observable<any>{
      return this._http.get<any>(`https://localhost:7051/api/User?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  }

  deleteUser(id:any): Observable<any>{
    return this._http.delete(`https://localhost:7051/api/User/${id}`);
  }

}