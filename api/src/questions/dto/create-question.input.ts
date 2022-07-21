import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionInput {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  testId: string;
}
