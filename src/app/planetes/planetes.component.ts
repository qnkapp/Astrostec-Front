import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-planetes',
  templateUrl: './planetes.component.html',
  styleUrls: ['./planetes.component.css']
})
export class PlanetesComponent implements OnInit {
  planet: any;
  constructor(private http: HttpClient, private otherService: OtherService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlanet();
  }
  getPlanet(): void {
    this.http.get(this.otherService.lienBack + 'planet').subscribe({
      next: (data) => { this.planet = data },
      error: (err) => { console.log(err) }
    })
  }

}
