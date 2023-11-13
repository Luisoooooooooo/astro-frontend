import { Injectable } from '@angular/core';
import { Member } from '../member';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class AuthService {

  constructor (private router: Router) {}

   public signIn(userData: Member){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;  }  public onLogout(){
    localStorage.removeItem('ACCESS_TOKEN');
  } 

  logout(): void {
    // Realiza cualquier limpieza necesaria, como eliminar tokens de sesión, etc.
    // Por ahora, simplemente redireccionamos al usuario a la página de login.
    this.router.navigateByUrl('/');
  }


}
