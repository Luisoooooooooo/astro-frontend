import { Component, OnInit } from '@angular/core';
import { PlanetsApiService } from 'src/app/services/planets-api.service'; 

@Component({
  selector: 'app-solarsystem',
  templateUrl: './solarsystem.component.html',
  styleUrls: ['./solarsystem.component.css']
})
export class SolarsystemComponent {
  mercure: any = [];
  venus: any = [];
  earth: any = [];
  mars: any = [];
  jupiter: any = [];
  saturne: any = [];
  uranus: any = [];
  neptune: any = null;
  
  constructor(private apiService: PlanetsApiService) {}

  ngOnInit(): void {
    this.fillPlanets();
  }

  fillPlanets() {
    this.apiService.getMercure().subscribe((mercure) => {
      this.mercure = {
        ...mercure,
      };
    });

    this.apiService.getVenus().subscribe((venus) => {
      this.venus = {
        ...venus,
      };
      console.log(this.venus)
    });

    this.apiService.getEarth().subscribe((earth) => {
      this.earth = {
        ...earth,
        
      };
      console.log(this.earth)
    });

    this.apiService.getMars().subscribe((mars) => {
      this.mars = {
        ...mars,
      };
      console.log(this.mars)
    });

    this.apiService.getJupiter().subscribe((jupiter) => {
      this.jupiter = {
        ...jupiter,
      };
      console.log(this.jupiter)
    })

    this.apiService.getSaturne().subscribe((saturne) => {
      this.saturne = {
        ...saturne,
      };
      console.log(this.saturne)
    })

    this.apiService.getUranus().subscribe((uranus) => {
      this.uranus = {
        ...uranus,
      };
      console.log(this.uranus)
    })

    this.apiService.getNeptune().subscribe((neptune) => {
      this.neptune = {
        ...neptune,
      };
      console.log(this.neptune)
    })

  }

}
