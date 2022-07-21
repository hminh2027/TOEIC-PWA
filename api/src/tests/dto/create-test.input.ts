import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { number } from 'joi';

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
}
