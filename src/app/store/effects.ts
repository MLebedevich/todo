import { ITodoTask } from './../todo.interface';
import { TodoService } from './../todo.service';
import { ToDoActions, getTodosSuccessAction, getTodosFailedAction, 
  deleteTodosSuccessAction, deleteTodosFailedAction, 
  loadTodosSuccessAction, loadTodosFailedAction } from './actions';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';


@Injectable()
export class todoEffects {

  public sendTodo$: Observable<Action> = createEffect(()=>
    this.actions$.pipe(
      ofType(ToDoActions.ADD_TODO),
      mergeMap(({taskItem}) => 
      this.todoService.postTask(taskItem).pipe(
        //tap(console.log),
        map((taskItem: ITodoTask) => getTodosSuccessAction({ taskItem })), 
        catchError(() => of(getTodosFailedAction()))))
    ))

  
  public deleteTodo$: Observable<Action> = createEffect(()=>
      this.actions$.pipe(ofType(ToDoActions.DELETE_TODO),
      mergeMap(({taskItem}) => 
      this.todoService.deleteTask(taskItem).pipe(
        map(()=>deleteTodosSuccessAction()),
        catchError(() => of(deleteTodosFailedAction()))
      ))
    )
  )

  public loadTodos$: Observable<Action> = createEffect(() => 
    this.actions$.pipe(ofType(ToDoActions.LOAD_TODOS),
    mergeMap(() => this.todoService.getTasks().pipe(
      tap(console.log),
      map((todos: ITodoTask[]) => {console.log(todos); 
      return loadTodosSuccessAction({todos})}),
      catchError(() => of(loadTodosFailedAction()))
    )))
  )

  constructor(
      private actions$: Actions,
      private todoService: TodoService
    ) {}
}
