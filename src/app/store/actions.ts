import { createAction, props } from '@ngrx/store';

export enum ToDoActions {
  ADD_TODO = '[TODO] ADD_TODO',
  DELETE_TODO = '[TODO] DELETE_TODO'
}

export const addTodoAction = createAction(ToDoActions.ADD_TODO,
  props<{taskItem: string}>());
export const deleteTodoAction = createAction(ToDoActions.DELETE_TODO,
  props<{taskItem: string}>());
