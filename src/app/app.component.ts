import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToDoListFilterPipe } from './pipes/toDoListFilter/to-do-list-filter.pipe';
import { TodosService } from './services/todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toDosService:TodosService, private filterPipe:ToDoListFilterPipe){}

  @ViewChild('task') someInput!: ElementRef<HTMLInputElement>;

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

}
