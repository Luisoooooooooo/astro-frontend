import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiISSService {

  private urlApiISS = "https://api.wheretheiss.at/v1/satellites/25544";

  constructor(private http: HttpClient) { }
    public getData(): Observable<any> {
      return this.http.get<any>(this.urlApiISS);
    }
}
