import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
  public buttonClicked: boolean = false;
  constructor(private http: HttpClient, private otherService: OtherService, private route: Router,public authService: AuthService) { }
  
  ngOnInit(): void {
    this.getSatellite();
    console.log(PlaneteService.getPlanetes)
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
  enregistrerSatellite(value: any): void {
    this.satellites.text = value
    this.http.put(this.otherService.lienBack + 'satellite/article/' + PlaneteService.getSatellite(), this.satellites).subscribe({
      next: (data) => { this.satellites = data },
      error: (err) => { console.log(err) }
    });
    this.buttonClicked = !this.buttonClicked;
  }

  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
  }
  gotoPlanet(){
    PlaneteService.savePlanetes(this.planete.id);
    this.route.navigateByUrl("detail-planetes")
  }
}
