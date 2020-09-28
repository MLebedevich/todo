import { from } from 'rxjs';
import {IToDo} from '../todo.interface';
import { createSelector } from '@ngrx/store';

export const selectActivities = (state: any ) => state.todoList;

export const selectTaskList = createSelector(
  selectActivities,
  (state: IToDo) => state.taskList
);
