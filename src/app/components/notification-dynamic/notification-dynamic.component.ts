import { AfterContentInit, Component, ComponentRef, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { NotifType } from 'src/app/enums/notif-type';
import { NotificationEventServiceService } from 'src/app/services/eventNotification/notification-event-service.service';

@Component({
  selector: 'app-notification-dynamic',
  templateUrl: './notification-dynamic.component.html',
  styleUrls: ['./notification-dynamic.component.scss']
})
export class NotificationDynamicComponent implements OnInit {

  constructor(private eventHandler:NotificationEventServiceService) { }

   title!:String;
   description!:String;
   timeout:number=5000;
   elementRef!:ComponentRef<NotificationDynamicComponent>;
   status!:NotifType;

  ngOnInit(): void {
  }

  startTimer(){
    setTimeout(() => {
      this.eventHandler.sendMessage(this.elementRef);
  }, this.timeout);
  }
  click(){
    this.eventHandler.sendMessage(this.elementRef);
  }



}
