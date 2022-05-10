import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  /* private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        return task.title.includes(search) || task.description.includes(search);
      });
    }

    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: string): Task {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      throw new NotFoundException();
    }
    return taskFound;
  }

  deleteTask(id: string): void {
    const taskFound = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== taskFound.id);
  }

  updateTask(id: string, status: TaskStatus): Task {
    const taskFound = this.getTaskById(id);
    taskFound.status = status;
    return taskFound;
  } */
  /* getTasks(): Task[] {}

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {}

  createTask(createTaskDto: CreateTaskDto): Task {}

  getTaskById(id: string): Task {}

  deleteTask(id: string): void {}

  updateTask(id: string, status: TaskStatus): Task {} */
}
