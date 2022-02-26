import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
}