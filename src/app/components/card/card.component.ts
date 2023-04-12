import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Conta } from 'src/app/services/conta.model';
import { ContaService } from 'src/app/services/conta.service';
import {DialogComponent} from '../dialog/dialog.component';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  constructor(private _matDialog:MatDialog, private contaService:ContaService) {}
  conta:Conta = {id:'', saldo:0};
  input = 0;
  onClick(tipo: 'saldo' | 'deposito' | 'saque', title:string) {
    this.contaService.saldoConta().subscribe(data=>{
      this.conta=data 
      });
       
    const dialog = this._matDialog.open(DialogComponent, {
      width:'20%',
      height:'300px',
      enterAnimationDuration:'800ms',
      exitAnimationDuration:'800ms',
    data:{
      saldo:this.conta.saldo,
      title,
      tipo,
      input:this.input,
      },
    })

    dialog.afterClosed().subscribe(item =>{
      console.log(item);
      if(tipo =='saque'){
        console.log(this.conta)
        this.contaService.saqueConta(this.conta.id as string, item).subscribe((data)=>{
          console.log(data)
        })
      }
      if(tipo =='deposito'){
        console.log(this.conta)
        this.contaService.depositoConta(this.conta.id as string, item).subscribe((data)=>{
          console.log(data)
        })
      }
    });
  }
   
}
