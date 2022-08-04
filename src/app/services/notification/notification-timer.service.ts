import { Injectable, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationDynamicComponent } from 'src/app/components/notification-dynamic/notification-dynamic.component';
import { NotifType } from 'src/app/enums/notif-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationTimerService {

  constructor() { }

  private containter!: ViewContainerRef;
  private timeout:number=5000;


  setContainer(containerRef:ViewContainerRef){
    this.containter=containerRef;
  }

  renderComponent(title:String,description:String,status:NotifType): void{
    if(this.containter!=null){
      const componentRef = this.containter.createComponent(
        NotificationDynamicComponent
      );
      componentRef.instance.title=title;
      componentRef.instance.description=description;
      componentRef.instance.elementRef=componentRef;
      componentRef.instance.timeout=this.timeout;
      componentRef.instance.status=status;
      componentRef.instance.startTimer();
    }
  }


}
