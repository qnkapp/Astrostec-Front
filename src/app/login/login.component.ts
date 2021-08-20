import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  membreLogin: any;

  constructor(/*private http: HttpClient, private otherService: OtherService */) { }

  ngOnInit(): void {

  }



}
