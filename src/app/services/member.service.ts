import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url:string =  'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listMembers(){
    return this.http.get<any>(this.url+`/api/members`);
  }

  httpOptions = {
    headers :  new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addMember(member:any): Observable<any> {
    return this.http.post<any>(this.url+`/api/members`, member, this.httpOptions);
  }

}
