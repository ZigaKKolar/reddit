import {Body, Controller, Delete, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./create-user.dto";
import {Public} from "../decorators";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }
    @Public()
    @Get()
    getAll(){
        return this.userService.getAll();
    }

    @Post()
    async createUser(@Body() createUserDto:CreateUserDto){
        return this.userService.createUser(createUserDto);
    }
}
