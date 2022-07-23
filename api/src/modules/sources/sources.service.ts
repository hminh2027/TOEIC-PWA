import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateSourceInput } from './dto/create-source.input';
import { UpdateSourceInput } from './dto/update-source.input';

@Injectable()
export class SourcesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(payload: CreateSourceInput) {
    return this.prismaService.testSource.create({ data: payload });
  }

  getAll() {
    return this.prismaService.testSource.findMany();
  }

  update(id: string, payload: UpdateSourceInput) {
    return this.prismaService.testSource.update({
      where: { id },
      data: payload,
    });
  }

  remove(id: string) {
    return this.prismaService.testSource.delete({ where: { id } });
  }
}
