import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UncompletedPipe } from './pipes/uncompleted.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UncompletedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
