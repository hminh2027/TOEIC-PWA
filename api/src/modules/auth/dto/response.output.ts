import { HttpStatus } from '@nestjs/common';
import { IsEnum, IsNotEmpty, IsObject, IsString } from 'class-validator';

export class ResponseObject {
  @IsNotEmpty()
  @IsEnum(HttpStatus)
  statusCode: HttpStatus;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsObject()
  data?: {};
}
