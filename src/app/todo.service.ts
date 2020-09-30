import { IToDo } from './todo.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class TodoService {
    url: string = 'https://5f6af582d808b90016bc1878.mockapi.io/todos';

    constructor (private http: HttpClient) {}

    postTask(todo: string ) {//IToDo
        //const tasks = todos.taskList;
        return this.http.post(this.url, {id:2, task: 'Read a book'});//tasks - {id:2, task: 'Read a book'}
    }

    deleteTask(todo: string) { // delete -> /todos/:id,for example /todos/2
        const currentUrl = `${this.url}/${todo}`; // поменять todo на id
        return this.http.delete(currentUrl);
    }

    getTasks() {
    }

    putTask() {
    }

}
