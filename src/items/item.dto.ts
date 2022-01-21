import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  note: string;

  @IsOptional()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  category: number | string;
}

export class UpdateItemDto extends PartialType(CreateItemDto) {}
