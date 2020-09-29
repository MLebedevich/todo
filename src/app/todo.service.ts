import { IToDo } from './todo.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class TodoService {
    url: string = 'https://5f6af582d808b90016bc1878.mockapi.io/:endpoint';

    constructor (private http: HttpClient) {}

    postData(todo: string ) {//IToDo
        //const tasks = todos.taskList;
        return this.http.post(this.url, todo);//tasks
    }

    deleteData(todo: string) {
        const currentUrl = `${this.url}/${todo}`;
        return this.http.delete(currentUrl);
    }

}
