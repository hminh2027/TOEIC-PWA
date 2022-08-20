import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { number } from 'joi';
import { TestCategory, TestSkill } from '@prisma/client';

export class CreateTestInput {
  @ApiProperty({ default: 'ETC 2022' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ default: '495', type: number })
  @IsNotEmpty()
  @IsInt()
  score: number;

  @ApiProperty({ default: '60', type: number })
  @IsNotEmpty()
  @IsInt()
  duration: number;

  @ApiProperty()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ nullable: true })
  audio: string;

  @ApiProperty({ default: 'ACBAD' })
  @IsNotEmpty()
  answer: string;

  @ApiProperty({ default: '5', type: number })
  @IsNotEmpty()
  numberOfQuestions: number;

  @ApiProperty({ enum: TestCategory })
  @IsEnum(TestCategory)
  testCategory: TestCategory;

  @ApiProperty({ enum: TestSkill })
  @IsEnum(TestSkill)
  testSkill: TestSkill;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  testSourceId: string;
}
