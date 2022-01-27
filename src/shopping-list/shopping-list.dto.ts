import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUrl,
  ValidateNested,
} from 'class-validator';

class ShopListItemDto {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @IsPositive()
  itemId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @IsPositive()
  pieces: number;
}

export class CreateShoppingListDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ShopListItemDto)
  @ArrayMinSize(1)
  items: ShopListItemDto[];
}
