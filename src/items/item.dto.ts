import { PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsInt()
  stock: number;

  @IsUUID('all')
  @IsNotEmpty()
  categoryId: string;
}

export class UpdateItemDto extends PartialType(CreateItemDto) {}
