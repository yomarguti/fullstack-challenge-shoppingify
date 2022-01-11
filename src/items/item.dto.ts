import { PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsInt()
  stock: number;
}

export class UpdateItemDto extends PartialType(CreateItemDto) {}
