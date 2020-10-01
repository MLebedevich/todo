import { ITodoTask } from './todo.interface';
import { addTodoAction, deleteTodoAction, loadTodosAction } from './store/actions';
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
    this.todoList$.subscribe((data)=>{this.initForm(data)});
  }

  ngOnInit(){
    this.store.dispatch(loadTodosAction());
    //this.initForm();
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
    //console.log("formValue " + formValue);
    this.store.dispatch(addTodoAction({taskItem}));
    this.addItem(taskItem);
  }

  deleteValue(taskItem: ITodoTask){
    //console.log($event)
    //console.log(taskItem)
    this.store.dispatch(deleteTodoAction({taskItem}))
  }

  initForm(array){
    this.myForm = this.fb.group({
      items: this.fb.array(array)
    })
    console.log(this.myForm)
  }
}
