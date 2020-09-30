export interface IToDo {
  taskList: ITodoTask[]; // ITodoTask[] /string[]
}

export interface ILoadedToDo {
  taskList: ITodoTask[]; // ITodoTask[] /string[]
}

export interface ITodoTask {
  id: number;
  task: string;
  completed?: boolean;
}

