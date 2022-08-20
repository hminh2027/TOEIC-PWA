import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';

@Module({
  exports: [TestsService],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
