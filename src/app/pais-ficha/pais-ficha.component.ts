import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pais-ficha',
  templateUrl: './pais-ficha.component.html',
  styleUrls: ['./pais-ficha.component.css']
})
export class PaisFichaComponent implements OnInit {
  pais: any;

  constructor(public dialogRef: MatDialogRef<PaisFichaComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.pais = data;
    
  }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

}
