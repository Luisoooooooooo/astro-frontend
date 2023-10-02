import { Component, Input, OnInit } from '@angular/core';

interface menuName {
  name: string;
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

  userLoginOn:boolean =  false;

  constructor() {}

  ngOnInit(): void {}

}
