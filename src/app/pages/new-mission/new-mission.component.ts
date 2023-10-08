import { Component, OnInit } from '@angular/core';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
  selector: 'app-new-mission',
  templateUrl: './new-mission.component.html',
  styleUrls: ['./new-mission.component.css']
})
export class NewMissionComponent implements OnInit {
  router: any;

  constructor(private missionService: MissionsService) {}

  missions: any;

  ngOnInit(): void {
    this.showMissions();
  }

  add(missionTitle:string, missionPost:string, missionAuthor:string) {
    this.missions = {
      'title': missionTitle,
      'post': missionPost,
      'author': missionAuthor
    };
    this.missionService.addMission(this.missions as any).subscribe(mission => {
      this.missions = mission;
    });
    console.log(this.missions);
  }


  showMissions() {
    this.missions = this.missionService.listMissions().subscribe(mission => {
      this.missions = mission;
      console.log(this.missions);
    })
  }

  deleteMission(id:any) {
    this.missionService.deleteMission(id).subscribe(
      res => {
        this.missions = this.missions.filter((a:any) => a.id == id);
      }
    );
    this.router.navigateByUrl('/dashboard');
  }
  
}
