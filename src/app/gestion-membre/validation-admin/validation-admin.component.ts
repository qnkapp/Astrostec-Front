import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OtherService } from 'src/app/services/other.service';

@Component({
  selector: 'app-validation-admin',
  templateUrl: './validation-admin.component.html',
  styleUrls: ['./validation-admin.component.css']
})
export class ValidationAdminComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private otherService: OtherService, private dialogRef: MatDialogRef<ValidationAdminComponent>) { }

  done : any;

  ngOnInit(): void {
  }

  onValidation(): void {
    this.http.put(this.otherService.lienBack+'make_admin/' + this.data.id, null).subscribe({
      next: (data) => { this.done = data },
      error: (err) => { console.log(err) }
    })
    this.dialogRef.close();
  }

  onQuit(): void{
    this.dialogRef.close();
  }

}
