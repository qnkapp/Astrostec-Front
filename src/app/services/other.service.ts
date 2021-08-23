import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  lienBack = 'http://localhost:8084/';
  private messageSource = new BehaviorSubject<String>("test");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: String) {
    this.messageSource.next(message);
  }

}
