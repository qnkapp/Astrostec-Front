import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DetailPlanetesComponent } from '../detail-planetes/detail-planetes.component';
import { OtherService } from '../services/other.service';
import { PlaneteService } from '../services/planete.service';

@Component({
  selector: 'app-planetes',
  templateUrl: './planetes.component.html',
  styleUrls: ['./planetes.component.css']
})
export class PlanetesComponent implements OnInit {
  
  planetes: any;
  constructor(
    private http: HttpClient,
    private otherService: OtherService, 
    private route: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlanete();
  }
  getPlanete(): void {
    this.http.get(this.otherService.lienBack + 'planet').subscribe({
      next: (data) => { this.planetes = data },
      error: (err) => { console.log(err) }
    })
  }

  goToDetail(p: any):void{
    
    PlaneteService.savePlanetes(p.id);
    this.route.navigateByUrl("detail-planetes")
    
  }

}
