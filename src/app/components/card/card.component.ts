import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  constructor(private _matDialog: MatDialog) {}
  onClick() {
    const dialog = this._matDialog.open(DialogComponent,{width:'20%', height:'200px',enterAnimationDuration:'800ms',
    exitAnimationDuration:'800ms',
    data:{
      saldo:'R$ 250,00',
    }
    });
    dialog.afterClosed().subscribe(item =>{
      console.log(item);
    });
  }
}
