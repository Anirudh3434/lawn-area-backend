import { IsNotEmpty, IsString } from 'class-validator';

export class CalculateAreaDto {
  @IsNotEmpty()
  @IsString()
  address: string;
}
