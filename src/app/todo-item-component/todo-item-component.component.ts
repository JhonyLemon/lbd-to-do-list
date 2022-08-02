import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TodosService } from '../services/todos/todos.service';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.scss']
})
export class TodoItemComponentComponent implements OnInit, AfterContentInit {

  constructor(private toDosService:TodosService) {}

  @Input()
  toDo!:Todo;
 
  DEFAULT_OFF_COLOR:String="#BBBBBB";
  DEFAULT_ON_COLOR:String="#33A532";
  HOVER_OFF_COLOR:String="#30D5C8";
  HOVER_ON_COLOR:String="#FFFD37";

  color!:String;

  mouseEnter(){
    this.toDo.done ? this.color=this.HOVER_ON_COLOR : this.color=this.HOVER_OFF_COLOR
  }

  mouseLeave(){
    this.toDo.done ? this.color=this.DEFAULT_ON_COLOR : this.color=this.DEFAULT_OFF_COLOR
  }

  click(){
    if(this.toDo.done){
      this.toDo.done=false;
      this.color=this.DEFAULT_OFF_COLOR;
    }else{
      this.toDo.done=true;
      this.toDo.doneCreated=new Date();
      this.color=this.DEFAULT_ON_COLOR
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    this.color=this.toDo.done ? this.DEFAULT_ON_COLOR : this.DEFAULT_OFF_COLOR;
  }

  deleteElement(){
    console.log("Delete");
    this.toDosService.removeToDO(this.toDo);
  }

}
