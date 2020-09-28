import { IToDo } from './../todo.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addTodoAction, deleteTodoAction } from './actions';

export const initialState: IToDo = {
  taskList: ['Wash the dish', 'Buy potatoe', 'Read a book']
}

const todoReducer = createReducer(
  initialState,
  on(addTodoAction, (state, {taskItem}) => ({...state, taskList: [ ...state.taskList, taskItem]})),
  on(deleteTodoAction, (state, {taskItem}) => {
    //console.log(taskItem);
    const array = [...state.taskList];
    //console.log(array);
    const index = array.indexOf(taskItem);
    //console.log(index);
    array.splice(index, 1);
    //console.log(array);

    return {...state, taskList: [...array]};
  })
);

export function reducer(state: any, action: Action) {
  return todoReducer(state, action);
}
