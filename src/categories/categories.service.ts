import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Category from "./category.entity";
import CreateCategoryDto from "./dto/createCategory.dto";
import UpdateCategoryDto from "./dto/updateCategory.dto";
import { CategoryNotFoundException } from "./exceptions/categoryNotFoundException";


@Injectable()
export class CategoriesService {
    constructor (
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>
    ) {}

    getAllCategories() {
        return this.categoriesRepository.find({ relations: ['posts'] });
      }

    async createCategory(category: CreateCategoryDto) {
        const newCategory = this.categoriesRepository.create({
            ...category
        })
        await this.categoriesRepository.save(newCategory);
        return newCategory;
    }
       
    async getCategoryById(id: number) {
        const category = await this.categoriesRepository.findOne(id, { relations: ['posts'] });
        if (category) {
            return category;
        }
        throw new CategoryNotFoundException(id);
    }
    
    async updateCategory(id: number, category: UpdateCategoryDto) {
        await this.categoriesRepository.update(id, category);
        const updatedCategory = await this.categoriesRepository.findOne(id, { relations: ['posts'] });
        if (updatedCategory) {
            return updatedCategory
        }
        throw new CategoryNotFoundException(id);
    }

    async deleteCategory(id: number) {
        const deleteResponse = await this.categoriesRepository.delete(id)
        if (!deleteResponse.affected) {
            throw new CategoryNotFoundException(id)
        }
    }
}