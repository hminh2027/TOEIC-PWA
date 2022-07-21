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
import { SourcesService } from './sources.service';
import { CreateSourceInput } from './dto/create-source.input';
import { UpdateSourceInput } from './dto/update-source.input';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from '.prisma/client';

@Controller('sources')
@ApiTags('test sources')
@ApiBearerAuth()
@UsePipes(ValidationPipe)
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

  @Post()
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Create a new source',
  })
  create(@Body() createSourceInput: CreateSourceInput) {
    return this.sourcesService.create(createSourceInput);
  }

  @Get()
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Return all test sources',
  })
  getAll() {
    return this.sourcesService.getAll();
  }

  @Patch(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Update a source',
  })
  update(
    @Param('id') id: string,
    @Body() updateSourceInput: UpdateSourceInput,
  ) {
    return this.sourcesService.update(id, updateSourceInput);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Delete a source',
  })
  remove(@Param('id') id: string) {
    return this.sourcesService.remove(id);
  }
}
