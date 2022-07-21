import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';

@Module({
  exports: [QuestionsService],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
