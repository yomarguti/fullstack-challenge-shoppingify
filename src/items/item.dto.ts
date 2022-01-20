import { PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsUrl, IsUUID } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  note: string;

  @IsOptional()
  @IsUrl()
  image: string;

  @IsUUID('all')
  @IsInt()
  categoryId: number;
}

export class UpdateItemDto extends PartialType(CreateItemDto) {}
