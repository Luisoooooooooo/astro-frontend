import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{

  constructor(private memberService: MemberService, private router: Router) {}

  members: any;

  ngOnInit(): void {
    this.showMembers();
  }

  showMembers() {
    this.members = this.memberService.listMembers().subscribe(member => {
      this.members = member;
      console.log(this.members);
    })
  }

  deleteMember(id:any) {
    this.memberService.deleteMember(id).subscribe(
      res => {
        this.members = this.members.filter((a:any) => a.id == id);
      }
    );
    this.router.navigateByUrl('/dashboard');
  }



}
