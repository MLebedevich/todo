import { IToDo, ITodoTask } from './todo.interface';
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
        return this.http.post(this.url, {id:1, task: todo});//tasks - {id:2, task: 'Read a book'}
    }

    deleteTask(todo: ITodoTask) { // delete -> /todos/:id,for example /todos/2
        const currentUrl = `${this.url}/${todo.id}`; 
        return this.http.delete(currentUrl);
    }

    getTasks() {
        return this.http.get(this.url);
    }

    putTask(id: number) {
        return this.http.put(this.url, id);
    }

}
