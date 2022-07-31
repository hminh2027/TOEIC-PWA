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
import { UserModel } from './models/user.model';
import { LoginInput } from '../auth/dto/login.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getByUserId(id: string): Promise<UserModel> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return exclude(user, 'password');
  }

  async getByEmail(email: string): Promise<UserModel> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return exclude(user, 'password');
  }

  async getByEmailAndPassword(payload: LoginInput): Promise<User> {
    const hashedPass = hashPassword(payload.password);
    return await this.prisma.user.findFirst({
      where: { email: payload.email, password: hashedPass },
    });
  }

  async createUser(payload: SignupInput): Promise<any> {
    const hashedPass = hashPassword(payload.password);
    if (payload.password2) exclude(payload, 'password2');
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
