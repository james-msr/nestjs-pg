import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Req } from '@nestjs/common';
import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication-guard';
import FindOneParams from '../utils/findOneParams';
import RequestWithUser from '../authentication/requestWithUser.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export default class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) {}
    
    @Get()
    @ApiTags()
    getAllPosts() {
        return this.postsService.getAllPosts();
    }
    
    @Get(':id')
    @ApiTags(':id')
    getPostById(@Param() {id}: FindOneParams) {
        return this.postsService.getPostById(Number(id));
    }
    
    @Post()
    @ApiTags()
    // @UseGuards(JwtAuthenticationGuard)
    async createPost(@Body() post: CreatePostDto, @Req() req: RequestWithUser) {
        return this.postsService.createPost(post, req.user);
    }
    
    @Put(':id')
    @ApiTags(':id')
    async updatePost(@Param() {id}: FindOneParams, @Body() post: UpdatePostDto) {
        return this.postsService.updatePost(Number(id), post);
    }
    
    @Delete(':id')
    @ApiTags(':id')
    async deletePost(@Param() {id}: FindOneParams) {
        this.postsService.deletePost(Number(id));
    }
}