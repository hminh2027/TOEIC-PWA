import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  create(payload: CreateQuestionInput) {
    return this.prisma.question.create({ data: payload });
  }

  update(id: string, payload: UpdateQuestionInput) {
    return this.prisma.question.update({
      where: { id },
      data: payload,
    });
  }

  remove(id: string) {
    return this.prisma.question.delete({ where: { id } });
  }
}
