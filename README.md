# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Create todo-list component
```
ng g c todo-list
```

todo-list.component.html
```
<p>
  <input type="text" #todoInput> <button (click)="addTodo(todoInput.value)">Add</button>
</p>

```
Create local variable `todoInput` and pass input value to `addTodo()` function

Display todo list. 

```
<ul>
  <li *ngFor="let todo of todoList; let i = index">
    <label>
      <input type="checkbox" [checked]="todo.isCompleted" (change)="toggleChecked(i)"> {{ todo.name }}
    </label>
  </li>
</ul>

```

Show uncompleted todos
```
<p>
  {{ todoList | uncompleted }} todo left
</p>
```

uncompleted.pipe.ts
```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uncompleted'
})
export class UncompletedPipe implements PipeTransform {

  transform(list: Array<any>): number {
    return list.filter(item => !item.isCompleted).length
  }

}

```


todo-list.component.ts

```
export class TodoListComponent implements OnInit {

  // Get reference to input
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
    // clear input value
    this.todoInput.nativeElement.value = '';
    this.saveToStorage();
  }

  toggleChecked(i: number){
    // create new array to make pipe work
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

```

