import { Component, Input } from '@angular/core';

interface menuName {
  name: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Input() menuItems: string[] = [];
@Input() linksItem: menuName[] = [];
@Input() menuCredentials: string[] = [];
}
