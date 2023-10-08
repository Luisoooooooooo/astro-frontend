import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  url:string =  'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listMissions(){
    return this.http.get<any>(this.url+`/api/missions`);
  }

  httpOptions = {
    headers :  new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addMission(mission:any): Observable<any> {
    return this.http.post<any>(this.url+`/api/missions`, mission, this.httpOptions);
  }

  deleteMission(id: any): Observable<any> {
    return this.http.delete<any>(this.url+`/api/mission/`+id, this.httpOptions);
  }

}
