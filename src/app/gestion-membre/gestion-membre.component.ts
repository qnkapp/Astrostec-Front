import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-gestion-membre',
  templateUrl: './gestion-membre.component.html',
  styleUrls: ['./gestion-membre.component.css']
})
export class GestionMembreComponent implements OnInit {

  listMembre: any;

  constructor(private http: HttpClient, private otherService: OtherService) { }

  ngOnInit(): void {
    this.listeMembre();
  }

  listeMembre(): void{
    this.http.get(this.otherService.lienBack + 'liste_membre').subscribe({
      next: (data) => { this.listMembre = data },
      error:  (err) => { console.log(err) }
    })
  }

}
