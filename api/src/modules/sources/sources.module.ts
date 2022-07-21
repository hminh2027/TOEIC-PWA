import { Module } from '@nestjs/common';
import { SourcesService } from './sources.service';
import { SourcesController } from './sources.controller';

@Module({
  exports: [SourcesService],
  controllers: [SourcesController],
  providers: [SourcesService],
})
export class SourcesModule {}
