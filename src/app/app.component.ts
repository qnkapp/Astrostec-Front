import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Astrotec-Front';
  constructor(
    private authService: AuthService,
) {}

currentUser = this.authService.currentUserValue;

logout() : void {
  this.authService.logout();
}

}

