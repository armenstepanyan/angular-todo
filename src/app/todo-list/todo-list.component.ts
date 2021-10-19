import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @ViewChild('todoInput', { static: true }) todoInput: ElementRef<any>;
  todoList = [];
  private LOCALSTORAGE_KEY = 'ng-todo';
  constructor() { }

  ngOnInit() {
    const data = localStorage.getItem(this.LOCALSTORAGE_KEY);
    if (data) {
      this.todoList = JSON.parse(data);
    }
  }

  addTodo(value: string){
    if(!value) {
      return;
    }
    this.todoList = [...this.todoList, { name: value, id: Date.now(), isCompleted: false }];
    this.todoInput.nativeElement.value = '';
    this.saveToStorage();
  }

  toggleChecked(i: number){
    this.todoList = this.todoList.map((todo, index) => {
      return {
        ...todo,
        isCompleted: (index === i) ? !todo.isCompleted : todo.isCompleted
      }
    })
    this.saveToStorage();
  }


  private saveToStorage(){
    localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(this.todoList))
  }

}
