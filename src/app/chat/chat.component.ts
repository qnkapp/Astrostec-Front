import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public nav: ForumService) { }

  ngOnInit(): void {
      console.log('dans chat');
      this.nav.hide();
  }

}
