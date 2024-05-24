import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticleEntity} from "../article/article.entity";
import {DeleteResult, Repository} from "typeorm";
import {SubEntity} from "./sub.entity";
import {CreateSubDto} from "./create-sub.dto";

@Injectable()
export class SubService {
    constructor(
        @InjectRepository(SubEntity)
        private readonly subRepository:Repository<SubEntity>) {
    }

    async create(createSub:CreateSubDto, userId: number): Promise<SubEntity> {
        const data = {...createSub, user:{id: userId}};
        const sub = this.subRepository.create(data);
        return await this.subRepository.save(sub);
    }

    async readAll(): Promise<SubEntity[]>{
        return await this.subRepository.find();
    }
    async readOne(id:number): Promise<SubEntity>{
        return await this.subRepository.findOneBy({id});
    }

    async update(id:number, updateSub:CreateSubDto){
        await this.subRepository.update(id, updateSub);
        return this.subRepository.findOneBy({id});
    }

    delete(id:number): Promise<DeleteResult>{
        return this.subRepository.delete(id);
    }

}
