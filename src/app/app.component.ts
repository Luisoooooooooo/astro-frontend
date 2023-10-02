import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'astro-observatory';
  items: string[] = ["PEOPLE IN SPACE", "SOLAR SYSTEM", "MISSIONS", "APOD"];
  linksItems = [
    {
      name: "PEOPLE IN SPACE",
      url: 'astros',
    },
    {
      name: "SOLAR SYSTEM",
      url: 'planets',
    },
    {
      name: "MISSIONS",
      url: 'missions',
    },
    {
      name: "APOD",
      url: 'picture',
    },
  ]
  credentials: string [] = ["LOGIN", "REGISTER"];
}
