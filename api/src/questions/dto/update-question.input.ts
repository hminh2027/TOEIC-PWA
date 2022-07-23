import { PickType } from '@nestjs/swagger';
import { CreateQuestionInput } from './create-question.input';

export class UpdateQuestionInput extends PickType(CreateQuestionInput, [
  'content',
]) {}
