import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/auth/register.service';
import { RegisterRequest } from 'src/app/services/auth/registerRequest';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.formBuilder.group({
    name: [
      '',
      Validators.required,
    ],
    email:[
      '', [
        Validators.required,
        Validators.email
      ]],
    password:  [
      (''),
      Validators.required]
  })
  
constructor(private formBuilder:FormBuilder, private router:Router, private registerService: RegisterService, private memberService: MemberService) {}

members:any;

ngOnInit(): void {
}

add(memberName:string, memberEmail:string, memberPassword:string) {
  this.members = {
    'name': memberName,
    'email': memberEmail,
    'password': memberPassword
  };
  this.memberService.addMember(this.members as any).subscribe(member => {
    this.members = member;
  });
  console.log(this.members);
}

get name() {
  return this.registerForm.controls.name;
}

get email() {
  return this.registerForm.controls.email;
}

get password() {
  return this.registerForm.controls.password;
}

}
