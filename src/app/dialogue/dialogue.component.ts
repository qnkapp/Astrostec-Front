import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { MyAdapter } from './Adapter/my-adapter';
import { AuthService } from '../services/auth.service';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  
  userId = this.authService.currentUserValue?.id;

  public adapter: ChatAdapter = new MyAdapter(this.http, this.otherService, this.authService);
  //public adapter: ChatAdapter = new MyAdapterPagedHistory();


  constructor(
    public authService: AuthService,
    private http: HttpClient,
    private otherService: OtherService
  ) { }

  ngOnInit(): void {
  }

}
