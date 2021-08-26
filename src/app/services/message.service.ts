import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message = new BehaviorSubject<String>('');
  sharedMessage = this.message.asObservable();

  constructor() { }

  sendMessage(message: String) {
    this.message.next(message);
  }
}
