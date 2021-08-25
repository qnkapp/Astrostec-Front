import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OtherService } from '../services/other.service';
import { PlaneteService } from '../services/planete.service';

@Component({
  selector: 'app-satellites',
  templateUrl: './satellites.component.html',
  styleUrls: ['./satellites.component.css']
})
export class SatellitesComponent implements OnInit {
  satellites: any;
  cheminImage: any;
  constructor(
    private http: HttpClient, 
    private otherService: OtherService, 
    private dialog: MatDialog,
    private route: Router,
    ) { }

  ngOnInit(): void {
    this.getSatellite();
    
  }
  getSatellite(): void {
    this.http.get(this.otherService.lienBack + 'satellite').subscribe({
      next: (data) => { this.satellites = data },
      error: (err) => { console.log(err) }
    })
  }
  goToDetailSatellite(s: any):void{
    
    PlaneteService.saveSatellite(s.id);
    this.route.navigateByUrl("detail-satellites")
    
  }
  // Imagepath(s: any):void{
  //  this.cheminImage = "/assets/Img/satellites/" + s.name + ".jpg";
  // }
}
