import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string = "";
  loginForm=this.formBuilder.group({
    name: [
      'Luiso',
      Validators.required,
    ],
    email:[
      'a@a.com', [
        Validators.required,
        Validators.email
      ]],
    password:  [
      '',
      Validators.required]
  })
  
constructor(private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) {}

ngOnInit(): void {}

get name() {
  return this.loginForm.controls.name;
}

get email() {
  return this.loginForm.controls.email;
}

get password() {
  return this.loginForm.controls.password;
}

login() {
  if(this.loginForm.valid) {
    this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
      next: (memberData) => {
        console.log(memberData);
      },
      error: (errorData) => {
        console.log(errorData);
        this.loginError=errorData;
      },
      complete: () => {
        console.info("Login complete");
        this.router.navigateByUrl('/memberDash');
        this.loginForm.reset();
      }
    })
  } else {
    this.loginForm.markAllAsTouched();
    alert("Error al ingresar los datos.")
  }
}

}
