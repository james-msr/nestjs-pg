import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    content: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;
}