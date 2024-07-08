import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProfileReq {
  @ApiProperty()
  @IsOptional()
  @MaxLength(255)
  @IsString()
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  avatar: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  @Type(() => Boolean)
  isAgreeReceivePromotion: boolean;
}
