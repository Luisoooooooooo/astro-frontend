import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit{

memberId: any;
member: any;

constructor(private route: ActivatedRoute, private router: Router, private memberService: MemberService) {}

ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  this.memberId = Number(routeParams.get('memberId'));
  console.log(this.memberId);
  this.memberService.find(this.memberId).subscribe((data:any) => {
    this.member = data;
    console.group(this.member);
  })
}

update(memberName: string, memberEmail: string, memberPassword: string) {
  this.memberService.update(this.memberId, this.member).subscribe((res) => {
    this.router.navigateByUrl('/dashboard');
  })
}

}
