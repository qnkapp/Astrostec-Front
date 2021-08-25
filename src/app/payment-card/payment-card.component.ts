import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent implements OnInit {
  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  payment():void{
    window.alert("Le paiement est validé! A bientôt pour vos futurs achats :)");
    this.dialogRef.closeAll();
  }

}
