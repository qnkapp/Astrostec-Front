import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtherService } from './other.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private otherService: OtherService) { }

  login(membre: any) {
    return this.http.post(this.otherService.lienBack + 'login', membre);
  }

}
