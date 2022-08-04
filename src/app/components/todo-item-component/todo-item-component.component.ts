import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos/todos.service';


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
  DONE_ICON:string="done";

  icon!:string;

  color!:String;


  @Output()
  deleteEvent:EventEmitter<Todo> = new EventEmitter();
  @Output()
  doneEvent:EventEmitter<Todo> = new EventEmitter();


  mouseEnter(){
    if(this.toDo.done){
      this.color=this.HOVER_ON_COLOR
      this.icon=this.DONE_ICON;
    }else{
      this.color=this.HOVER_OFF_COLOR
      this.icon=this.DONE_ICON;
    }
  }

  mouseLeave(){
    if(this.toDo.done){
      this.color=this.DEFAULT_ON_COLOR
      this.icon=this.DONE_ICON;
    }else{
      this.color=this.DEFAULT_OFF_COLOR
      this.icon="";
    }
  }

  click(){
    if(this.toDo.done){
      this.toDo.done=false;
      this.color=this.DEFAULT_OFF_COLOR;
      this.icon="";
    }else{
      this.toDo.done=true;
      this.toDo.doneCreated=new Date();
      this.doneEvent.emit();
      this.color=this.DEFAULT_ON_COLOR
      this.icon="done";
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    this.color=this.toDo.done ? this.DEFAULT_ON_COLOR : this.DEFAULT_OFF_COLOR;
  }

  deleteElement(){
    this.deleteEvent.emit(this.toDo);
  }

}
