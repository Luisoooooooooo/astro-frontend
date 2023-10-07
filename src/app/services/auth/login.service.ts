import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { Member } from '../member';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string =  'http://localhost:8000';
  currentMemberLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentMemberData: BehaviorSubject<Member> = new BehaviorSubject<Member>({id:0, email:'', password:''});

  constructor(private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<Member> {
    return this.http.get<Member>(this.url+`/api/members`).pipe(
      tap((memberData: Member) => {
        this.currentMemberData.next(memberData);
        this.currentMemberLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse) {
    if(error.status===0) {
      console.log('Error', error.error);
    } else {
      console.error('Backend error', error.status, error.error);
    }
    return throwError(() => new Error('Something gone wrong. Try again.'));
  }

  get memberData():Observable<Member> {
    return this.currentMemberData.asObservable();
  }

}
