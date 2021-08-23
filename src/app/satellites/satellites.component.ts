import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-satellites',
  templateUrl: './satellites.component.html',
  styleUrls: ['./satellites.component.css']
})
export class SatellitesComponent implements OnInit {
  satellites: any;
  constructor(private http: HttpClient, private otherService: OtherService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSatellite();
  }
  getSatellite(): void {
    this.http.get(this.otherService.lienBack + 'satellite').subscribe({
      next: (data) => { this.satellites = data },
      error: (err) => { console.log(err) }
    })
  }

}
