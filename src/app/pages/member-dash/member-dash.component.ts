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
  data: any = {};
  
  constructor(private apiService: ApiISSService, private loginService: LoginService) {}


  ngOnInit(): void {
    this.fillData();
    this.loginService.currentMemberLoginOn.subscribe({
      next: (memberLoginOn) => {
        this.memberLoginOn=memberLoginOn;
      }
    })
  }

fillData() {
  this.apiService.getData().subscribe(data => {
    this.data = data;
    console.log(this.data);
  })
}

}