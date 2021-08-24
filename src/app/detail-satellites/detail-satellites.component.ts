import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';
import { PlaneteService } from '../services/planete.service';

@Component({
  selector: 'app-detail-satellites',
  templateUrl: './detail-satellites.component.html',
  styleUrls: ['./detail-satellites.component.css']
})
export class DetailSatellitesComponent implements OnInit {
  satellites: any;
  planete: any;
  constructor(private http: HttpClient, private otherService: OtherService) { }

  ngOnInit(): void {
    this.getSatellite();
    this.getPlanet();
  }
  getSatellite(): void {
    this.http.get(this.otherService.lienBack + 'satellite/' + PlaneteService.getSatellite()).subscribe({
      next: (data) => { this.satellites = data },
      error: (err) => { console.log(err) }
    });
  }
  getPlanet(): void {
    this.http.get(this.otherService.lienBack + 'planet/' + PlaneteService.getPlanetes()).subscribe({
      next: (data) => { this.planete = data },
      error: (err) => { console.log(err) }
    });
  }
}
