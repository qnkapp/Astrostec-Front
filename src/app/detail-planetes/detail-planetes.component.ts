import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';
import { PlaneteService } from '../services/planete.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-detail-planetes',
  templateUrl: './detail-planetes.component.html',
  styleUrls: ['./detail-planetes.component.css']
})


export class DetailPlanetesComponent implements OnInit {
  satellites: any;
  planete: any;
  taille: any;
  filterName: any;
  public buttonClicked: boolean = false;
  constructor(private http: HttpClient, private otherService: OtherService, private route: Router,public authService: AuthService, ) { }

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
    this.taille = this.planete.diamater / 12753;
  }

  enregistrer(value: any): void {
    this.planete.text = value
    this.http.put(this.otherService.lienBack + 'planet/article/' + PlaneteService.getPlanetes(), this.planete).subscribe({
      next: (data) => { this.planete = data },
      error: (err) => { console.log(err) }
    });
    this.buttonClicked = !this.buttonClicked;
  }

  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
  }
  gotosatellite(s: any){
    PlaneteService.saveSatellite(s.id);
    this.route.navigateByUrl("detail-satellites")
  }
}