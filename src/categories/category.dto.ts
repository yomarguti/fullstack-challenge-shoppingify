import { PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
