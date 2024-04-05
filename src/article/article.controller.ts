import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateArticleDto} from "./create-article.dto";
import {ArticleService} from "./article.service";

@Controller('articles')
export class ArticleController {

    constructor(private articleService:ArticleService) {
    }

    @Post()
    createArticle(@Body() createArticle:CreateArticleDto){
        return this.articleService.create(createArticle);
    }

    @Get()
    readAllArticles() {
        return this.articleService.getAll();
    }

    @Put()
    updateArticle(){

    }

    @Delete(':id')
    deleteArticle(@Param('id') id:number){
        return this.articleService.delete(id);
    }
}
