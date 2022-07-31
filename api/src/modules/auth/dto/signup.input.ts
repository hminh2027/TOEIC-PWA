import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { Match } from '../../../common/decorators/match.decorator';

export class SignupInput {
  @ApiProperty({ default: 'test@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: 'Jackie Chan' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: 'Pass123!' })
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: `password must contains at least 8 characters, including at least 1 number, 1 uppercase letter, 1 lowercase letter and 1 special character.`,
    },
  )
  password: string;

  @ApiProperty({ default: 'Pass123!' })
  @IsNotEmpty()
  @Match('password', { message: 'password does not match' })
  password2: string;
}
