import { IsJWT } from 'class-validator';

export class Jwt {
  @IsJWT()
  token: string;
}
