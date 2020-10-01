export interface IToDo {
  taskList: ITodoTask[]; // ITodoTask[] /string[]
}

export interface ILoadedToDo {
  taskList: ITodoTask[]; // ITodoTask[] /string[]
}

export interface ITodoTask {
  id: any;
  task: string;
  completed?: boolean;
}

