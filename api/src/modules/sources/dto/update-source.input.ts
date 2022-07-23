import { PartialType } from '@nestjs/mapped-types';
import { CreateSourceInput } from './create-source.input';

export class UpdateSourceInput extends PartialType(CreateSourceInput) {}
