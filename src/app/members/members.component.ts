import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit{

  constructor(private memberService: MemberService) {}

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

}
