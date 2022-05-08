import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 1,
      task: 'Lorem',
    },
    {
      id: 2,
      task: 'Lorem',
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
}
