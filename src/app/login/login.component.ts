import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private otherService: OtherService) { }

  membre: any;
  msgErr: any;

  ngOnInit(): void {
    
  }

  connexion(membre: any): void {
    this.http.post(this.otherService.lienBack + 'login', membre).subscribe({
      next: (data) => { 
        this.membre = data;
        if (this.membre != null){
          console.log(this.membre)
          this.msgErr = null;
        }
        else{
          this.msgErr = "Mauvais login ou mot de passe"
        }
       },
      error: (err) => { console.log(err) }
    })
  }
}
