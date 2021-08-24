import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { OtherService } from '../services/other.service';
import { verifySameEmail } from './sign-up-directives/verifySameEmail.directive';
import { verifySameMdp } from './sign-up-directives/verifySameMdp.directive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private otherService: OtherService,
    private route: Router,
    private messageService: MessageService
  ) { }

  message: any;
  membre = { nom: null, prenom: null, ddn: null, pseudo: null, email: null, mdp: null };
  newMembre: any;
  membreForm: any;
  todaysdate = new Date();
  verifyExist: any;


  ngOnInit(): void {
    this.membreForm = new FormGroup({
      nom: new FormControl(this.membre.nom),
      prenom: new FormControl(this.membre.prenom),
      ddn: new FormControl(this.membre.ddn),
      pseudo: new FormControl(this.membre.pseudo, [Validators.required]),
      email: new FormControl(this.membre.email, [Validators.required]),
      sameEmail: new FormControl(),
      mdp: new FormControl(this.membre.mdp, [Validators.required, Validators.minLength(3)]),
      sameMdp: new FormControl()
    }, { validators: [verifySameEmail, verifySameMdp] });
    this.messageService.sharedMessage.subscribe(message => this.message = message)
  }


  get nom() { return this.membreForm.get('nom'); }
  get prenom() { return this.membreForm.get('prenom'); }
  get ddn() { return this.membreForm.get('ddn'); }
  get pseudo() { return this.membreForm.get('pseudo'); }
  get email() { return this.membreForm.get('email'); }
  get sameEmail() { return this.membreForm.get('sameEmail'); }
  get mdp() { return this.membreForm.get('mdp'); }
  get sameMdp() { return this.membreForm.get('sameMdp'); }

  signup(membre: any): void {
    this.http.post(this.otherService.lienBack + 'creation', membre).subscribe({
      next: (data) => {
        this.verifyExist = data;
        if (this.verifyExist == 0) {
          this.messageService.sendMessage("Enregistrement réussi! Vous pouvez vous connecter")
          this.route.navigateByUrl("connexion");
        }
      },
      error: (err) => { console.log(err) }
    })
  }


}
