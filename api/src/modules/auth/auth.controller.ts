import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReqCookie } from 'src/common/decorators/cookie.decorator';
import { ReqUser } from 'src/common/decorators/user.decorator';
import { GoogleAuthGuard } from 'src/common/guards/google.guard';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { ResponseObject } from './dto/response.output';
import { SignupInput } from './dto/signup.input';
import { GoogleService } from './google.service';

@Controller('auth')
@ApiTags('authentication')
@UsePipes(ValidationPipe)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly googleService: GoogleService,
  ) {}

  @Get('me')
  @ApiOperation({
    description: 'Return the current user informations',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getMe(@ReqUser() user): any {
    return this.usersService.getByUserId(user.id);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@ReqUser() user) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@ReqUser() user) {
    return this.googleService.googleLogin(user);
  }

  @Post('login')
  @ApiOperation({
    description: 'Return tokens',
  })
  // Note: Set refresh token to cookie in response's header
  async login(@Body() payload: LoginInput): Promise<ResponseObject> {
    const user = await this.usersService.getByEmailAndPassword(payload);
    if (!user) throw new BadRequestException('Wrong email or password!');

    return {
      statusCode: HttpStatus.OK,
      message: 'Login successfully!',
      data: await this.authService.generateTokens({ userId: user.id }),
    };
  }

  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({
    description: 'Revoke tokens',
  })
  async logout(): Promise<any> {}

  @Post('signup')
  @ApiOperation({
    description: 'Create account and return tokens',
  })
  // Note: Set refresh token to cookie in response's header
  async signup(@Body() payload: SignupInput): Promise<ResponseObject> {
    const user = await this.usersService.createUser(payload);
    return {
      statusCode: HttpStatus.OK,
      message: 'Signed up successfully!',
      data: await this.authService.generateTokens({ userId: user.id }),
    };
  }

  @Post('refresh')
  @ApiBearerAuth()
  @ApiOperation({
    description: 'Return access token',
  })
  // Note: Test
  async refreshToken(@ReqCookie() cookie: string): Promise<ResponseObject> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Refresh token successfully!',
      data: await this.authService.refreshToken(cookie),
    };
  }
}
