import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./create-user.dto";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    }

    getAll():Promise<User[]> {
        return this.userRepository.find();
    }

    async createUser(createUserDto:CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({email});
    }
}
