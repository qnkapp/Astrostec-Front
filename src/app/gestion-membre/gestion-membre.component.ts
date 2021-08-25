import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';
import { Membre } from '../_models/membre.model';
import { ValidationAdminComponent } from './validation-admin/validation-admin.component';

@Component({
  selector: 'app-gestion-membre',
  templateUrl: './gestion-membre.component.html',
  styleUrls: ['./gestion-membre.component.css']
})
export class GestionMembreComponent implements OnInit {

  listMembre: any;
  displayedColumns: string[] = ['id', 'pseudo', 'nom', 'prenom', 'email', 'ddn', 'dateCreation', 'admin', 'supprimer'];
  checked = true;

  constructor(private http: HttpClient, private otherService: OtherService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listeMembre();
  }

  listeMembre(): void{
    this.http.get(this.otherService.lienBack + 'liste_membre').subscribe({
      next: (data) => { this.listMembre = data },
      error:  (err) => { console.log(err) }
    })
  }

  supprimerMembre(id: number): void {
    this.http.get(this.otherService.lienBack + 'supprimer/' + id).subscribe({
      next: (data) => { this.ngOnInit() },
      error:  (err) => { console.log(err) }
    })
    
  }

  openValidation(pseudonyme: string, membre_id: number, message: string): void {
    const dialogRef = this.dialog.open(ValidationAdminComponent, {
      width: '500px',
      data: {pseudo: pseudonyme, id: membre_id, msg: message}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
