import { Injectable } from '@angular/core';
import { Users } from '../Users';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RenderizacaoDeListaServiceService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  removeUsers(users: Users[], user: Users): Users[] {
    return users.filter(u => user.name !== u.name);
  }

  httpRequest(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  getUserName(name: string): Observable<Users>{
    return this.http.get<Users>(`${this.url}/${name}`);
    console.log(this.http.get<Users>(`${this.url}/${name}`))
  }
}
