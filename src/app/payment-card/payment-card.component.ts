import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialog, private http: HttpClient, private otherService: OtherService, private authService: AuthService,private cartService:CartService) { }

  ngOnInit(): void {
  }


  payment(): void {
    var commandeAfter: any;
    var items = this.data;
    var dateTime = new Date();
    var currentUser = this.authService.currentUserValue;

    console.log(items);

    this.http.post(this.otherService.lienBack + "ajout_commande", { "dateCreation": dateTime, "membre": currentUser }).subscribe({
      next: (data) => {
        commandeAfter = data;
        items.forEach((pr: any) => {
          this.http.post(this.otherService.lienBack + "produits_commande", { "produit": pr, "commande": commandeAfter, "quantite": pr.quantite }).subscribe({
            next: (data) => { console.log(data) },
            error: (err) => { console.log(err) }
          })
        });
      },
      error: (err) => { console.log(err) }
    });



    window.alert("Le paiement est validé! A bientôt pour vos futurs achats :)");
    this.cartService.clearCart();
    this.dialogRef.closeAll();
  }

}
