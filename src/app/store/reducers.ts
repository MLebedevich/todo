import { IToDo, ITodoTask } from './../todo.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addTodoAction, deleteTodoAction } from './actions';

export const initialState: IToDo = { //['Wash the dish', 'Buy potatoe', 'Read a book']
  taskList: [
    { id: 1, task: 'Wash the dish'},
    { id: 2, task: 'Buy potatoe'},
    { id: 3, task: 'Read a book'} ]
}

const todoReducer = createReducer(
  initialState,
  on(addTodoAction, (state, {taskItem}) => (
    {
      ...state, 
      taskList: [ ...state.taskList, taskItem]})), //taskItem поменять строку на обьект
  on(deleteTodoAction, (state, {taskItem}) => {
    const requredId = taskItem.id;

    console.log(requredId);
      
    const array = [...state.taskList];
    const index = array.findIndex(x => {
      return x.id === requredId;
    })
    console.log(index);
    array.splice(index, 1);

    return {...state, taskList: [...array]};
  })
);

export function reducer(state: any, action: Action) {
  return todoReducer(state, action);
}

