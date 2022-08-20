import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { boolean } from 'joi';

export class CreateAnswerInput {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ type: boolean })
  @IsNotEmpty()
  @IsBoolean()
  correct: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  questionId: string;
}
