import { Injectable } from '@nestjs/common';
import {DeleteResult, Repository} from "typeorm";
import {ArticleEntity} from "./article.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateArticleDto} from "./create-article.dto";
import {User} from "../user/user.entity";

@Injectable()
export class ArticleService {


    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository:Repository<ArticleEntity>) {
    }

    async create(createArticle:CreateArticleDto){
        const user_id = 2;
        const data = {...createArticle, user:{id:user_id}, sub:{id:createArticle.sub_id}};
        const article = this.articleRepository.create(data);
        return await this.articleRepository.save(article);
    }

    async getAll():Promise<ArticleEntity[]> {
        return await this.articleRepository.find();
    }

    delete(id: number): Promise<DeleteResult>{
        return this.articleRepository.delete(id);
    }

}
