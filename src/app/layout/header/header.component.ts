import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { Member } from 'src/app/services/member';

interface menuName {
  name: string;
  email:string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() menuItems: string[] = [];
  @Input() linksItem: menuName[] = [];
  @Input() menuCredentials: string[] = [];

  constructor(private loginService: LoginService, private authService: AuthService) {}

  adminLoginOn: boolean = false;
  memberLoginOn: boolean = false;
  memberData?:Member;
  adminData?:Member;

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
    });

    this.loginService.memberEmail.subscribe({
      next: (email) => {
        if (email === 'admin@gmail.com') {
          this.adminLoginOn = true;
        } else {
          this.adminLoginOn = false;
        }
      }
    });

  }

  onLogout(): void {
    this.authService.logout();
    // Además, puedes reiniciar cualquier variable relacionada con la autenticación, si es necesario.
    this.adminLoginOn = false;
    this.loginService.currentMemberLoginOn.next(false);
  }

}
