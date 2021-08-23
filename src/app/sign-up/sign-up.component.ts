import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private otherService: OtherService, private route: Router, private messageService: MessageService) { }

  membre: any;
  msgErrPseudo: any;
  msgErrEmail: any;
  msgErrMdp: any;
  verifyExist: any;

  ngOnInit(): void {
    
  }

  signup(membre: any): void {
    this.http.post(this.otherService.lienBack + 'creation', membre).subscribe({
      next: (data) => { 
        this.verifyExist = data;
        if (this.verifyExist == 1){
          this.msgErrPseudo = "Le pseudo existe déjà";
        }
        else if (this.verifyExist == 2){
          this.msgErrEmail = "L'email existe déjà";
        }
        else if (this.verifyExist == 0){
          this.messageService.sendMessage("Enregistrement réussi! Vous pouvez vous connecter")
          this.route.navigateByUrl("connexion")
        }
       },
      error: (err) => { console.log(err) }
    })
  }

}
