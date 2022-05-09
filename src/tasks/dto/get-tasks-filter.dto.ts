import { TaskStatus } from '../task.model';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: 'This status is not valid',
  })
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
