import { ITodoTask } from './../todo.interface';
import { createAction, props } from '@ngrx/store';


export enum ToDoActions {
  ADD_TODO = '[TODO] ADD_TODO',
  DELETE_TODO = '[TODO] DELETE_TODO',

  GET_TODO_SUCCESS = '[TODO] GET_TODO_SUCCES',
  GET_TODO_FAILED = '[TODO] GET_TODO_FAILED',

  DELETE_TODO_SUCCESS = '[TODO] DELETE_TODO_SUCCESS',
  DELETE_TODO_FAILED = '[TODO] DELETE_TODO_FAILED',

  LOAD_TODOS = '[TODO] LOAD_TODOS',
  LOAD_TODOS_SUCCESS = '[TODO] LOAD_TODOS_SUCCESS',
  LOAD_TODOS_FAILED = '[TODO] LOAD_TODOS_FAILED',

  PUT_TODO = '[TODO] PUT_TODO',
  PUT_TODO_SUCCESS = '[TODO] PUT_TODO_SUCCESS',
  PUT_TODO_FAILED = '[TODO] PUT_TODO_FAILED'
}

export const addTodoAction = createAction(ToDoActions.ADD_TODO,
  props<{taskItem: string}>());
export const deleteTodoAction = createAction(ToDoActions.DELETE_TODO,
  props<{taskItem: ITodoTask}>());

export const getTodosSuccessAction = createAction(ToDoActions.GET_TODO_SUCCESS,
  props<{taskItem: string}>());
export const getTodosFailedAction = createAction(ToDoActions.GET_TODO_FAILED);

export const deleteTodosSuccessAction = createAction(ToDoActions.DELETE_TODO_SUCCESS);
export const deleteTodosFailedAction = createAction(ToDoActions.DELETE_TODO_FAILED);
