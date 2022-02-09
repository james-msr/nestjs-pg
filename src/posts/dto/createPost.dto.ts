import { IsString, IsNotEmpty } from 'class-validator';

export default class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    title: string;
}