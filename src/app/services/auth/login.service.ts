import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { Member } from '../member';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string =  'https://luis.proyectosdwa.es/backend/public';
  currentMemberLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentMemberData: BehaviorSubject<Member> = new BehaviorSubject<Member>({id:0, email:'', password:''});
  private currentMemberEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor(private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<Member[]> {
    return this.http.post<any>(this.url+`/api/login`, credentials).pipe(
      tap(memberData => {
        console.log({memberData});
        this.currentMemberEmail.next(memberData.data.email);
        this.currentMemberData.next(memberData.data);
        this.currentMemberLoginOn.next(true);
      }),
      catchError(this.handleError)
    )
  }

  get memberEmail(): Observable<string> {
    return this.currentMemberEmail.asObservable();
  }

  private handleError(error:HttpErrorResponse) {
    if(error.status===0) {
      console.log('Error', error.error);
    } else {
      console.error('Backend error', error.status, error.error);
    }
    return throwError(() => new Error('Something gone wrong. Try again.'));
  }

  get memberData(): Observable<Member> {
    return this.currentMemberData.asObservable();
  }

  get memberLoginOn(): Observable<boolean> {
    return this.currentMemberLoginOn.asObservable();
  }

}
