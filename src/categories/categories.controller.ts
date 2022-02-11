import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import FindOneParams from '../utils/findOneParams';
import { CategoriesService } from './categories.service';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';

@Controller('categories')
export class CategoriesController {
    constructor (
        private readonly categiriesService: CategoriesService
    ) {}

    @Get()
    getAllCategories() {
        return this.categiriesService.getAllCategories()
    }

    @Post()
    async createCategory(@Body() category: CreateCategoryDto) {
        return this.categiriesService.createCategory(category)
    }

    @Get(':id')
    async getCategoryById(@Param() {id}: FindOneParams) {
        return this.categiriesService.getCategoryById(Number(id))
    }

    async updateCategory(@Param() {id}: FindOneParams, @Body() category: UpdateCategoryDto) {
        return this.categiriesService.updateCategory(Number(id), category)
    }

}
