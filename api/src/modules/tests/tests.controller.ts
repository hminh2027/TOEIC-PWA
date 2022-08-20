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
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get()
  @ApiOperation({
    description: 'Get all tests',
  })
  getALl() {
    return this.testsService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get a test by id',
  })
  getByTestId(@Param('id') id: string) {
    return this.testsService.getByTestId(id);
  }

  @Post()
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Create new test',
  })
  @Roles(Role.ADMIN)
  create(@Body() payload: CreateTestInput) {
    return this.testsService.create(payload);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Update a test',
  })
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestInput) {
    return this.testsService.update(id, updateTestDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Delete a test',
  })
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.testsService.remove(id);
  }
}
