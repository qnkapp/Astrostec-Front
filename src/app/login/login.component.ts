import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private otherService: OtherService, private messageService: MessageService, private authService: AuthService) { }

  message: any;
  membre: any;
  msgErr: any;

  ngOnInit(): void {
    this.messageService.sharedMessage.subscribe((message:String) => this.message = message)
  }

  connexion(membre: any): void {
    this.authService.login(membre).subscribe({
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
