import { AfterContentInit, Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationDynamicComponent } from './components/notification-dynamic/notification-dynamic.component';
import { Todo } from './interfaces/todo';
import { ToDoListFilterPipe } from './pipes/toDoListFilter/to-do-list-filter.pipe';
import { NotificationEventServiceService } from './services/eventNotification/notification-event-service.service';
import { NotificationTimerService } from './services/notification/notification-timer.service';
import { TodosService } from './services/todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit,OnInit {

  constructor(
    private toDosService:TodosService,
    private filterPipe:ToDoListFilterPipe,
    private notif:NotificationTimerService,private notifEvents:NotificationEventServiceService){}

  ngOnInit(): void {
    this.notifEvents.message$.subscribe(ref => {
      ref.destroy();
    })
  }

  ngAfterContentInit(): void {
    this.notif.setContainer(this.containter);
  }

  @ViewChild('task') someInput!: ElementRef<HTMLInputElement>;
  @ViewChild('container',{read: ViewContainerRef, static: true})
  private containter!: ViewContainerRef;

  title = 'lbd-to-do-list';

  addToDo(){
    this.toDosService.addToDo(this.someInput.nativeElement.value);
    this.someInput.nativeElement.value="";
    this.someInput.nativeElement.focus();
  }

  getDoneTasks(){
    return this.filterPipe.transform(this.toDosService.toDos,true);
  }
  getUndoneTasks(){
    return this.filterPipe.transform(this.toDosService.toDos,false);
  }

  deleteEvent(componentRef:ComponentRef<NotificationDynamicComponent>){
    componentRef.destroy();
  }

  doneNotif(){
    this.toDosService.changeTaskDone();
  }

  deleteTask(task:Todo){
    console.log("delete");
    this.toDosService.removeToDO(task);
  }


}
