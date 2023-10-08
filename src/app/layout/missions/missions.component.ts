import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  constructor(private missionsService: MissionsService, private router: Router) {}

  missions: any;

  ngOnInit(): void {
    this.showMissions();
  }

  showMissions() {
    this.missions = this.missionsService.listMissions().subscribe(mission => {
      this.missions = mission;
      console.log(this.missions);
    })
  }

}
