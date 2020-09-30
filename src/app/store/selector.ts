import { ILoadedToDo, IToDo } from './../todo.interface';
import { createSelector } from '@ngrx/store';

export const selectActivities = (state: any ) => state.todoList;

export const selectTaskList = createSelector(
  selectActivities,
  (state: IToDo) => state.taskList//.map(value => value.task)
);

/*
export const selectLoadedActivities = (state: any) => state.loadedTodoList;
export const selectLoadedTaskList = createSelector(
  selectLoadedActivities,
  (state: ILoadedToDo) => state.taskList
);
*/


