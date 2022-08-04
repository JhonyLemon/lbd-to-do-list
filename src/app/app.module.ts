import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { TodoItemComponentComponent } from './components/todo-item-component/todo-item-component.component';
import {MatIconModule} from '@angular/material/icon';
import { ToDoListFilterPipe } from './pipes/toDoListFilter/to-do-list-filter.pipe';
import { TooltipDirective } from './directives/tooltip.directive';
import { NotificationDynamicComponent } from './components/notification-dynamic/notification-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponentComponent,
    ToDoListFilterPipe,
    TooltipDirective,
    NotificationDynamicComponent
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
