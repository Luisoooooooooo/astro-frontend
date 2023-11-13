import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { ApiISSService } from 'src/app/services/iss-api.service';
import { Member } from 'src/app/services/member';

@Component({
  selector: 'app-member-dash',
  templateUrl: './member-dash.component.html',
  styleUrls: ['./member-dash.component.css']
})
export class MemberDashComponent implements OnInit {
  memberLoginOn: boolean = false;
  memberData?:Member;
  
  constructor(private loginService: LoginService) {}
  
  ngOnInit(): void {
    this.loginService.currentMemberLoginOn.subscribe({
      next: (memberLoginOn) => {
        this.memberLoginOn = memberLoginOn;
        console.log({memberLoginOn});
      }
    });

    this.loginService.currentMemberData.subscribe({
      next:(memberData) => {
        this.memberData = memberData;
      }
    })

  }



}