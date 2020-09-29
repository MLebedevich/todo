import { createAction, props } from '@ngrx/store';

export enum ToDoActions {
  ADD_TODO = '[TODO] ADD_TODO',
  DELETE_TODO = '[TODO] DELETE_TODO',
  GET_TODO_SUCCESS = '[TODO] GET_TODO_SUCCES',
  GET_TODO_FAILED = '[TODO] GET_TODO_FAILED'
}

export const addTodoAction = createAction(ToDoActions.ADD_TODO,
  props<{taskItem: string}>());
export const deleteTodoAction = createAction(ToDoActions.DELETE_TODO,
  props<{taskItem: string}>());
export const getTodosSuccessAction = createAction(ToDoActions.GET_TODO_SUCCESS,
  props<{taskItem: string}>());
export const getTodosFailedAction = createAction(ToDoActions.GET_TODO_FAILED)
