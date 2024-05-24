import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request} from '@nestjs/common';
import {ArticleService} from "../article/article.service";
import {SubService} from "./sub.service";
import {CreateSubDto} from "./create-sub.dto";
import {JwtGuard} from "../auth/guards/jwt.guard";

@Controller('subs')
export class SubController {
    constructor(private subService:SubService) {
    }

    @Post()
    @UseGuards(JwtGuard)
    createSub(@Body() createSub:CreateSubDto, @Request() req) {
        const userId = req.user.sub;
        return this.subService.create(createSub, userId)
    }

    @Get()
    @UseGuards(JwtGuard)
    readAll() {
        return this.subService.readAll();
    }@Get(':id')
    @UseGuards(JwtGuard)
    readOne(@Param('id') id: number) {
        return this.subService.readOne(id);
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
