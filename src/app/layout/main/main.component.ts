import { Component, OnInit } from '@angular/core';
import { ApiISSService } from 'src/app/services/iss-api.service';
import { Member } from 'src/app/services/member';
import { LoginService } from 'src/app/services/auth/login.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  memberLoginOn: boolean = false;
  memberData?:Member;
  data: any = {};
  
  constructor(private apiService: ApiISSService, private loginService:LoginService) {}

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

    this.fillData();
    
  }

fillData() {
  this.apiService.getData().subscribe(data => {
    this.data = data;
    console.log(this.data);
  })
}

}
