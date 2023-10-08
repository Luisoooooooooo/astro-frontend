import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {

  missionId: any;
  mission: any;
  missions: any

  constructor(private route: ActivatedRoute, private router: Router, private missionsService: MissionsService) {}

  ngOnInit(): void {
    this.showMissions();
    const routeParams = this.route.snapshot.paramMap;
    this.missionId = Number(routeParams.get('missionId'));
    console.log(this.missionId);
    this.missionsService.find(this.missionId).subscribe((data:any) => {
      this.mission = data;
      console.log(this.mission);
    })
  }

  update(missionTitle: string, missionPost: string, missionAuthor: string) {
    this.missionsService.update(this.missionId, this.mission).subscribe((res) => {
      this.router.navigateByUrl('/dashboard');
    })
  }

  add(missionTitle:string, missionPost:string, missionAuthor:string) {
    this.missions = {
      'title': missionTitle,
      'post': missionPost,
      'author': missionAuthor
    };
    this.missionsService.addMission(this.missions as any).subscribe(mission => {
      this.missions = mission;
    });
    console.log(this.missions);
  }

  showMissions() {
    this.missions = this.missionsService.listMissions().subscribe(mission => {
      this.missions = mission;
      console.log(this.missions);
    })
  }

  deleteMission(id:any) {
    this.missionsService.deleteMission(id).subscribe(
      res => {
        this.missions = this.missions.filter((a:any) => a.id == id);
      }
    );
    this.router.navigateByUrl('/dashboard');
  }

}
