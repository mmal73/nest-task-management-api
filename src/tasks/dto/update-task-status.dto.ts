import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: 'This status is not valid',
  })
  status: TaskStatus;
}
