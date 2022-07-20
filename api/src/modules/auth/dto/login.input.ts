import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginInput {
  @ApiProperty({ required: true, default: 'test@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, default: 'Pass123!' })
  @IsNotEmpty()
  password: string;
}
