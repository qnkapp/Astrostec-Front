import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient, 
    private otherService: OtherService, 
    private messageService: MessageService, 
    private authService: AuthService,
    private router: Router) { }
  

  message: any;
  membre: any;
  msgErr: any;
  loading = false;

  ngOnInit(): void {
    this.messageService.sharedMessage.subscribe((message:String) => this.message = message)
  }

  connexion(membre: any): void {
    this.loading = true;
    this.authService.login(membre)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigateByUrl('Accueil');
        },
        error => {
            console.log(error)
        });
  }
}
