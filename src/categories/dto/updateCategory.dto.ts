import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export default class UpdateCategoryDto {
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional({
        type: Number
    })
    id: number;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiPropertyOptional()
    name: string;
}