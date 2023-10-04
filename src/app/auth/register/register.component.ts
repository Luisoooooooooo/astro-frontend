import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/auth/register.service';
import { RegisterRequest } from 'src/app/services/auth/registerRequest';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.formBuilder.group({
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
  
constructor(private formBuilder:FormBuilder, private router:Router, private registerService: RegisterService) {}

ngOnInit(): void {}

get name() {
  return this.registerForm.controls.name;
}

get email() {
  return this.registerForm.controls.email;
}

get password() {
  return this.registerForm.controls.password;
}

register() {
  if(this.registerForm.valid) {
    this.registerService.register(this.registerForm.value as RegisterRequest);
    this.router.navigateByUrl('/');
    this.registerForm.reset();
  } else {
    this.registerForm.markAllAsTouched();
    alert("Error al ingresar los datos.")
  }
}

}
