import { addTodoAction, deleteTodoAction } from './store/actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import {selectTaskList} from './store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  todoList$: Observable<any>;

  constructor(private store: Store<{todoList: any}>) {
    this.todoList$ = this.store.select(selectTaskList);
    this.todoList$.subscribe((data)=>{console.log(data)})
  }

  submitValue(taskItem: string){
    console.log(this.title);
    this.store.dispatch(addTodoAction({taskItem}));
  }

  deleteValue(taskItem: string){ 
    //console.log($event)
    this.store.dispatch(deleteTodoAction({taskItem}))
  }
}
