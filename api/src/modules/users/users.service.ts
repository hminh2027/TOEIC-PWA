import { PrismaService } from 'nestjs-prisma';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { exclude } from 'src/common/utils/exclude';
import { Prisma, Role, User } from '@prisma/client';
import { SignupInput } from '../auth/dto/signup.input';
import { hashPassword } from 'src/common/utils/hash';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<string> {
    return 'user';
  }

  async getByEmail(email: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return exclude(user, 'password');
  }

  async getByEmailAndPassword(email: string, password: string): Promise<User> {
    const hashedPass = hashPassword(password);
    return await this.prisma.user.findFirst({
      where: { email, password: hashedPass },
    });
  }

  async createUser(payload: SignupInput): Promise<any> {
    const hashedPass = hashPassword(payload.password);
    try {
      return await this.prisma.user.create({
        data: {
          ...payload,
          password: hashedPass,
          role: Role.USER,
        },
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`Email ${payload.email} already used.`);
      } else {
        throw new Error(e);
      }
    }
  }

  updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput,
  ) {
    // const passwordValid = await this.passwordService.validatePassword(
    //   changePassword.oldPassword,
    //   userPassword,
    // );

    // if (!passwordValid) {
    //   throw new BadRequestException('Invalid password');
    // }

    const hashedPassword = hashPassword(changePassword.newPassword);

    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }
}
