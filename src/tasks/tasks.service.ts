import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from '../auth/user.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto, user);
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
  }

  async updateTask(id: string, status: TaskStatus): Promise<Task> {
    const taskFound = await this.getTaskById(id);

    taskFound.status = status;
    await this.tasksRepository.save(taskFound);

    return taskFound;
  }

  async getTaskById(id: string): Promise<Task> {
    const taskFound = await this.tasksRepository.findOne(id);
    if (!taskFound) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    return taskFound;
  }
}
