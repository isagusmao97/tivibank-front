import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContaService } from 'src/app/services/conta.service';

interface DialogData{
  saldo:string;
  title:string;
  tipo:'saldo' | 'deposito' | 'saque'
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData, private Ref:MatDialogRef<DialogComponent> ){}
  result:any;
  ngOnInit(): void{
    this.result = this.data;
  }
  CloseDialog(){
    this.Ref.close("Seu saldo atual é de 250");
  }
  

}
