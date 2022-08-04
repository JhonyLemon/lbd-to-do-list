import { Injectable, OnInit } from '@angular/core';
import { NotifType } from 'src/app/enums/notif-type';
import { Todo } from 'src/app/interfaces/todo';
import { NotificationTimerService } from '../notification/notification-timer.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService{

  constructor(private notif:NotificationTimerService,private snack:SnackbarService) { }


  toDos =new Array<Todo>();

  addToDo(task:String){
    if(task!=null && task!=""){
      if(task.length<5){
        this.notif.renderComponent("Błąd","Nazwa nie może być krótsza od 5 znaków",NotifType.ERROR);
        this.snack.renderComponent("Nazwa nie może być krótsza od 5 znaków",NotifType.ERROR);
      }else{
        this.toDos.push({task:task,done:false,doneCreated:new Date()});
        this.notif.renderComponent("Sukces","Pomyślnie dodano zadanie",NotifType.SUCCESS);
        this.snack.renderComponent("Pomyślnie dodano zadanie",NotifType.SUCCESS);
      }
    }else{
      this.notif.renderComponent("Błąd","Pole tekstowe nie może być puste",NotifType.ERROR);
      this.snack.renderComponent("Pole tekstowe nie może być puste",NotifType.ERROR);
    }
  }

  removeToDO(task:Todo){
    if(this.toDos.indexOf(task)!=-1){
      this.toDos.splice(this.toDos.indexOf(task), 1);
      this.notif.renderComponent("Sukces","Pomyślnie usunięto zadanie",NotifType.SUCCESS);
      this.snack.renderComponent("Pomyślnie usunięto zadanie",NotifType.SUCCESS);
    }
    else{
      this.notif.renderComponent("Błąd","Nie można usunąć",NotifType.ERROR);
      this.snack.renderComponent("Nie można usunąć",NotifType.ERROR);
    }
  }

  changeTaskDone(){
    this.notif.renderComponent("Sukces","Pomyślnie ustawiono zadanie jako zrobione",NotifType.SUCCESS);
    this.snack.renderComponent("Pomyślnie ustawiono zadanie jako zrobione",NotifType.SUCCESS);
  }

}
