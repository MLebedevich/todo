import { TodoService } from './../todo.service';
import { ToDoActions, getTodosSuccessAction, getTodosFailedAction, 
  deleteTodosSuccessAction, deleteTodosFailedAction } from './actions';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';


@Injectable()
export class todoEffects {

  public sendTodo$: Observable<Action> = createEffect(()=>
    this.actions$.pipe(
      ofType(ToDoActions.ADD_TODO),
      mergeMap(({taskItem}) => 
      this.todoService.postData(taskItem).pipe(
        map((data: string) => getTodosSuccessAction({ data })), 
        catchError(() => of(getTodosFailedAction()))))
    ))

  
  public deleteTodo$: Observable<Action> = createEffect(()=>
      this.actions$.pipe(ofType(ToDoActions.DELETE_TODO),
      mergeMap(({taskItem}) => 
      this.todoService.deleteData(taskItem).pipe(
        map(()=>deleteTodosSuccessAction()),
        catchError(() => of(deleteTodosFailedAction()))
      ))
    )
  )

  constructor(
      private actions$: Actions,
      private todoService: TodoService
    ) {}
}
