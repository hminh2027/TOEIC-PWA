import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { ResponseObject } from './dto/response.output';
import { SignupInput } from './dto/signup.input';
import { Token } from './models/token.model';

@Controller('auth')
@ApiTags('authentication')
@ApiBearerAuth()
@UsePipes(ValidationPipe)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('me')
  getMe(): any {
    return;
  }

  @Post('login')
  async login(@Body() payload: LoginInput): Promise<ResponseObject> {
    const user = await this.usersService.getByEmailAndPassword(
      payload.email,
      payload.password,
    );
    if (!user) throw new NotFoundException('Wrong email or password!');

    return {
      statusCode: HttpStatus.OK,
      message: 'Login successfully!',
      data: await this.authService.generateTokens({ userId: user.id }),
    };
  }

  @Post('signup')
  async signup(@Body() payload: SignupInput): Promise<ResponseObject> {
    const user = await this.usersService.createUser(payload);
    return {
      statusCode: HttpStatus.OK,
      message: 'Signed up successfully!',
      data: await this.authService.generateTokens({ userId: user.id }),
    };
  }
}
