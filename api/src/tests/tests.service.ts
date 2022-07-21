import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';

@Injectable()
export class TestsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(payload: CreateTestInput) {
    return this.prismaService.test.create({ data: payload });
  }

  update(id: string, payload: UpdateTestInput) {
    return this.prismaService.test.update({
      where: { id },
      data: payload,
    });
  }

  remove(id: string) {
    return this.prismaService.test.update({
      where: { id },
      data: { deleted: true },
    });
  }
}
