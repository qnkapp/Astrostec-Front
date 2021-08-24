import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';
import { PlaneteService } from '../services/planete.service';


@Component({
  selector: 'app-detail-planetes',
  templateUrl: './detail-planetes.component.html',
  styleUrls: ['./detail-planetes.component.css']
})


export class DetailPlanetesComponent implements OnInit {
  satellites: any;
  planete: any;

  constructor(private http: HttpClient, private otherService: OtherService) { }

  ngOnInit(): void {
    this.satelliteByPlanet();
    this.getPlanet();
  }

  satelliteByPlanet(): void {
    this.http.get(this.otherService.lienBack + 'satellite/planet/' + PlaneteService.getPlanetes()).subscribe({
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
