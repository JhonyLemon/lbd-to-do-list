import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';
import {MatIconModule} from '@angular/material/icon';
import { ToDoListFilterPipe } from './pipes/toDoListFilter/to-do-list-filter.pipe';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponentComponent,
    ToDoListFilterPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormsModule
  ],
  providers: [ToDoListFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
