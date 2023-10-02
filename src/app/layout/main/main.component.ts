import { Component, OnInit } from '@angular/core';
import { ApiISSService } from 'src/app/services/iss-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: any = {};
  
  constructor(private apiService: ApiISSService) {}


  ngOnInit(): void {
    this.fillData();
    
  }

fillData() {
  this.apiService.getData().subscribe(data => {
    this.data = data;
    console.log(this.data);
  })
}

}
