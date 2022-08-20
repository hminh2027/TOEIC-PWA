import { PartialType } from '@nestjs/mapped-types';
import { CreateAnswerInput } from './create-answer.input';

export class UpdateAnswerInput extends PartialType(CreateAnswerInput) {}
