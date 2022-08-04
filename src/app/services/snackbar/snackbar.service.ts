import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { GlobalPositionStrategy } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { NotifType } from 'src/app/enums/notif-type';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private dialog:Dialog) { }

  private ref!:DialogRef<unknown, SnackbarComponent>;

  timeout:number=5000;

  renderComponent(description:string,status:NotifType){
    if(this.dialog!=null){
      if(this.ref!=null)
      this.ref.close();
    this.ref=this.dialog.open(SnackbarComponent, {
      hasBackdrop:false,
      disableClose:true,
      positionStrategy: new GlobalPositionStrategy().bottom("10px").centerHorizontally(),
      minWidth: '300px',
      data: {
        description: description,
        status: status
      }
    });
    this.timeoutFunc(this.ref,this.timeout);
    }

  }
  private timeoutFunc(ref:DialogRef<unknown, SnackbarComponent>,timeout:number){
    setTimeout(() => {
      if(ref!=null)
        ref.close();
    }, timeout);
  }
}
