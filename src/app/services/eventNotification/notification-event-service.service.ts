import { ComponentRef, EventEmitter, Injectable, Output } from '@angular/core';
import { NotificationDynamicComponent } from 'src/app/components/notification-dynamic/notification-dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationEventServiceService {

  constructor() { }

  @Output() message$: EventEmitter<ComponentRef<NotificationDynamicComponent>> = new EventEmitter();
  sendMessage(message: ComponentRef<NotificationDynamicComponent>) {
      this.message$.emit(message)
  }
}
