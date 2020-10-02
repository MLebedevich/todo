import { IToDo, ITodoTask } from './../todo.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addTodoAction, deleteTodoAction, getTodosSuccessAction, loadTodosSuccessAction, putTodoSuccessAction } from './actions';

export const initialState: IToDo = { //['Wash the dish', 'Buy potatoe', 'Read a book']
  taskList: [
    { id: 1, task: 'Wash the dish'},
    { id: 2, task: 'Buy potatoe'},
    { id: 3, task: 'Read a book'} ]
}

const todoReducer = createReducer(
  initialState,
  on(getTodosSuccessAction, (state, {taskItem}) => ({
    ...state,
    taskList: [ ...state.taskList, taskItem]
  })
    /*addTodoAction, (state, {taskItem}) => (
    {
      ...state, 
      taskList: [ ...state.taskList, taskItem]})*/), //taskItem поменять строку на обьект
  on(deleteTodoAction, (state, {taskItem}) => ({
    ...state,
    taskList: [...state.taskList.filter(({id}:ITodoTask)=>id !== taskItem.id)] 
  })),
  on(loadTodosSuccessAction, (state, {todos}) => ({
    ...state,
    taskList: [...todos] //создать новый селект и прокинуть todos туда, затем изменения в app component, пока грузится в старый
  })),
  on(putTodoSuccessAction, (state, {taskItem}) =>({
    ...state,
    taskList: [...state.taskList.filter(({id}:ITodoTask)=>id !== taskItem.id), taskItem] //x.id === taskItem.id ? x.task = taskItem.task: x.task)]
  }))
);

export function reducer(state: any, action: Action) {
  return todoReducer(state, action);
}

