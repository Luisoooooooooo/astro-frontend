import { Component, OnInit } from '@angular/core';
import { ApiISSService } from 'src/app/services/iss-api.service';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css'],
})
export class IssComponent implements OnInit {

  data: any = {};
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    center: {lat: 0, lng: 0},
    zoom: 2,
  };
  marker = {
    position: {lat: 0, lng: 0},
  }

  
  constructor(private apiService: ApiISSService) {}

  ngOnInit(): void {
    this.fillData();
  }

  fillData() {
    this.apiService.getData().subscribe((data) => {
      this.marker = {
        position: {lat: Number(data['latitude']), lng: Number(data['longitude']) },
      }
      this.options = {
        ...this.options,
        center:  {lat: Number(data['latitude']), lng: Number(data['longitude']) },
      }
      this.data = { 
        ...data, 
        altitude: `${parseInt(data.altitude, 10)} km`,
        latitude: `${parseInt(data.latitude, 10)} ${data.latitude > 0 ? "N":"S"}`,
        longitude: `${parseInt(data.longitude, 10)} ${data.longitude > 0 ? "E":"W"}`
      }
    });
  }
  
}
