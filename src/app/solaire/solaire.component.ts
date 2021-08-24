import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-solaire',
  templateUrl: './solaire.component.html',
  styleUrls: ['./solaire.component.css']
})
export class SolaireComponent implements OnInit {

  constructor(private http: HttpClient, private otherService: OtherService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
