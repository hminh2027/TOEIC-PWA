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
import { QuestionsService } from './questions.service';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from '.prisma/client';

@Controller('question')
@ApiTags('question')
@ApiBearerAuth()
@UsePipes(ValidationPipe)
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  @ApiOperation({
    description: 'Revoke tokens',
  })
  get() {}

  @Post()
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Create a new question',
  })
  create(@Body() payload: CreateQuestionInput) {
    return this.questionsService.create(payload);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Update a question',
  })
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionInput,
  ) {
    return this.questionsService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '(ADMIN only)',
    description: 'Delete new question',
  })
  remove(@Param('id') id: string) {
    return this.questionsService.remove(id);
  }
}
