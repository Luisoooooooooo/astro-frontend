import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url:string =  'https://luis.proyectosdwa.es/backend/public';

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

  find(id: number): Observable<any> {
    return this.http.get(this.url+`/api/member/`+id);
  }

  update(id: number, member: any): Observable<any> {
      return this.http.put(this.url+`/api/member/`+id, member, this.httpOptions);
  }

  deleteMember(id: any): Observable<any> {
    return this.http.delete<any>(this.url+`/api/member/`+id, this.httpOptions);
  }

}
