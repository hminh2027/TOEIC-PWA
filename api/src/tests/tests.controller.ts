import { Role } from '.prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/role.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { RolesGuard } from 'src/common/guards/role.guard';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { TestsService } from './tests.service';

@Controller('tests')
@ApiTags('test')
@ApiBearerAuth()
@UsePipes(ValidationPipe)
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post()
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Create new test',
  })
  create(@Body() payload: CreateTestInput) {
    return this.testsService.create(payload);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Update a test',
  })
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestInput) {
    return this.testsService.update(id, updateTestDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Delete a test',
  })
  remove(@Param('id') id: string) {
    return this.testsService.remove(id);
  }
}
