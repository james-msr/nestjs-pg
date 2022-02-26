import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
 
export default class UpdatePostDto {
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
    content: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiPropertyOptional()
    title: string;
}