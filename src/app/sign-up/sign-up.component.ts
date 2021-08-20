import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private otherService: OtherService) { }

  membre: any;
  msgErr: any;

  ngOnInit(): void {
  }

  signup(membre: any): void {
    this.http.post(this.otherService.lienBack + 'creation', membre).subscribe({
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
