import { map } from 'rxjs/operators';
import { ITodoTask, IToDo } from './todo.interface';
import { addTodoAction, deleteTodoAction, loadTodosAction, putTodoAction } from './store/actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { selectTaskList } from './store/selector';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputForm = new FormControl('');
  title: string;
  todoList$: Observable<any>;// = this.store.select(state => state.todoList);
  myForm: FormGroup;

  constructor(private fb: FormBuilder ,private store: Store<{todoList: any}>) {
    this.todoList$ = this.store.select(selectTaskList);
    this.todoList$.subscribe((data)=>{this.initForm(data)});//.unsubscribe();
  }

  ngOnInit(){
    this.store.dispatch(loadTodosAction());
    //this.initForm();
    //this.initData();
  }

  initData(){

  }

  get itemsArray(): FormArray{
    return this.myForm.controls.items as FormArray;
  }

  addItem(itemValue) {
    const newControl = new FormControl('');
    newControl.setValue(itemValue);
    this.itemsArray.push(newControl);
  }

  submitValue(){
    const taskItem: string = this.inputForm.value;
    this.store.dispatch(addTodoAction({taskItem}));
    //this.addItem(taskItem);
  }

  deleteValue(item){ //taskItem: ITodoTask
    const taskItem: ITodoTask = JSON.parse(item);
    this.store.dispatch(deleteTodoAction({taskItem}));
    //this.store.dispatch(putTodoAction({taskItem}));
  }

  logObject(item){
    //console.log(item);
    //console.log(JSON.parse(item));
    const taskItem: ITodoTask = JSON.parse(item);//{id: "12", task: "eat an apple"};
    this.store.dispatch(putTodoAction({taskItem}));
  }

  initForm(array){
    const listItems = array.map(x => JSON.stringify(x))//= array.map(x => x.task);
    this.myForm = this.fb.group({
      items: this.fb.array(listItems)
    }) /*
    this.myForm = this.fb.group({
      items: this.fb.array([
        this.fb.control(''),
        this.fb.control('')
      ])
    }) */
    //console.log(JSON.parse(listItems[0]))
  }
}
