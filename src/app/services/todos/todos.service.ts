import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  toDos =new Array<Todo>();

  addToDo(task:String){
    if(task!=null && task!=""){
      console.log(this.toDos);
      this.toDos.push({task:task,done:false,doneCreated:new Date()});
    }
  }

  removeToDO(task:Todo){
    if(this.toDos.indexOf(task)!=-1)
      this.toDos.splice(this.toDos.indexOf(task), 1);
  }

} 
