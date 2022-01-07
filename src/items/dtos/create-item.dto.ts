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
