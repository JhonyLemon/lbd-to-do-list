import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Pipe({
  name: 'toDoListFilter',
})
export class ToDoListFilterPipe implements PipeTransform {

  transform(list: Todo[], arg: Boolean): Todo[] {    
    return list.filter(item => item.done==arg);
  }

}
