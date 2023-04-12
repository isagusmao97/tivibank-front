import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  constructor(private _matDialog:MatDialog) {}
  onClick(tipo: 'saldo' | 'deposito' | 'saque') {
    const dialog = this._matDialog.open(DialogComponent, {
      width:'20%',
      height:'200px',
      enterAnimationDuration:'800ms',
      exitAnimationDuration:'800ms',
    data:{
      saldo:'R$ 250,00',
      title:"Saldo atual",
      tipo,
      },
    });
    dialog.afterClosed().subscribe(item =>{
      console.log(item);
    });
  }
}
