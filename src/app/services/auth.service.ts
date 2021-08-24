import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OtherService } from './other.service';
import { Membre } from '../_models/membre.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<Membre | null>;
  public currentUser: Observable<Membre | null>;

  constructor(private http: HttpClient, private otherService: OtherService) {
    let curUser = localStorage.getItem('currentUser') as string;
    this.currentUserSubject = new BehaviorSubject<Membre | null>(JSON.parse(curUser));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Membre | null {
    return this.currentUserSubject.value;
  }

  login(membre: any) {
    return this.http.post<any>(this.otherService.lienBack + 'login', membre)
      .pipe(map(membre => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(membre));
        this.currentUserSubject.next(membre);
        return membre;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public isConnected(): boolean {
    if (this.currentUserValue!=null){
      return true;
    } else return false;
  }
}
