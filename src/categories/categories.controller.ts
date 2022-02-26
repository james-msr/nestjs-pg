import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import FindOneParams from '../utils/findOneParams';
import { CategoriesService } from './categories.service';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor (
        private readonly categiriesService: CategoriesService
    ) {}

    @Get()
    @ApiTags()
    getAllCategories() {
        return this.categiriesService.getAllCategories()
    }

    @Post()
    @ApiTags()
    async createCategory(@Body() category: CreateCategoryDto) {
        return this.categiriesService.createCategory(category)
    }

    @Get(':id')
    @ApiTags(':id')
    async getCategoryById(@Param() {id}: FindOneParams) {
        return this.categiriesService.getCategoryById(Number(id))
    }

    @Put(':id')
    @ApiTags(':id')
    async updateCategory(@Param() {id}: FindOneParams, @Body() category: UpdateCategoryDto) {
        return this.categiriesService.updateCategory(Number(id), category)
    }

    @Delete(':id')
    @ApiTags(':id')
    async deleteCategory(@Param() {id}: FindOneParams) {
        return this.categiriesService.deleteCategory(Number(id))
    }
}
