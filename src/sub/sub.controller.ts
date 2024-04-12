import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ArticleService} from "../article/article.service";
import {SubService} from "./sub.service";
import {CreateSubDto} from "./create-sub.dto";

@Controller('subs')
export class SubController {
    constructor(private subService:SubService) {
    }

    @Post()
    createSub(@Body() createSub:CreateSubDto) {
        return this.subService.create(createSub)
    }

    @Get()
    readAll() {
        return this.subService.readAll();
    }

    @Patch(":id")
    updateSub(@Param("id") id:number, @Body()updateSub:CreateSubDto) {
        return this.subService.update(id, updateSub);
    }

    @Delete(":id")
    deleteSub(@Param("id") id:number){
        return this.subService.delete(id);
    }
}
