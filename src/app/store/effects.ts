import { TodoService } from './../todo.service';
import { ToDoActions, getTodosSuccessAction, getTodosFailedAction } from './actions';
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
      mergeMap(({taskItem}) => this.todoService.postData(taskItem)
      .pipe(map((taskItem) => getTodosSuccessAction(taskItem)), 
      catchError(() => of(getTodosFailedAction()))))
    ))

  /*
  public deleteTodo$: Observable<Action> = createEffect(()=>
      this.actions$.pipe(ofType(ToDoActions.DELETE_TODO),
      exhaustMap(({taskItem}) => this.todoService.postData(taskItem).pipe(
        catchError(() => EMPTY)
      ))
    )
  )

    /*
    public sendList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(ofType(...[ToDoActions.ADD_TODO, ToDoActions.DELETE_TODO]),
    mergeMap( (data)=>this.todoService.postData(data.payload)
    .pipe(catchError(() => EMPTY))
   ));*/

    constructor(
        private actions$: Actions,
        private todoService: TodoService
      ) {}
}
