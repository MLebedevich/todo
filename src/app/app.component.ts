import { ITodoTask } from './todo.interface';
import { addTodoAction, deleteTodoAction, loadTodosAction } from './store/actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import {selectTaskList} from './store/selector';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputForm = new FormControl('');
  title: string;
  todoList$: Observable<any>;// = this.store.select(state => state.todoList);

  constructor(private store: Store<{todoList: any}>) {
    this.todoList$ = this.store.select(selectTaskList);
    //this.todoList$.subscribe((data)=>{console.log(data)});
  }

  ngOnInit(){
    this.store.dispatch(loadTodosAction());
  }

  submitValue(){
    const taskItem: string = this.inputForm.value;
    //console.log("formValue " + formValue);
    this.store.dispatch(addTodoAction({taskItem}));
  }

  deleteValue(taskItem: ITodoTask){
    //console.log($event)
    //console.log(taskItem)
    this.store.dispatch(deleteTodoAction({taskItem}))
  }
}
