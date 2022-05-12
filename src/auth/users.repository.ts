import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Logger } from '@nestjs/common';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  private readonly logger = new Logger(UsersRepository.name, {
    timestamp: true,
  });

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = this.create({ username, password: hashedPassword });
    try {
      await this.save(user);
    } catch (error) {
      this.logger.error(
        `Failed to create user for user "${user.username}"`,
        error.stack,
      );
      if (error.code == '23505') {
        throw new ConflictException('Username already exists');
      }
      throw new InternalServerErrorException('Username already exists');
    }
  }
}
