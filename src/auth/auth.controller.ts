import {Body, Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
import {SignInDto} from "./sign-in.dto";
import {AuthService} from "./auth.service";
import {LocalGuard} from "./guards/local.guard";
import {JwtGuard} from "./guards/jwt.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    @UseGuards(LocalGuard)
    login (@Request() req, @Body() loginDto: SignInDto) {
        return req.user;
    }

    @Get('profile')
    @UseGuards(JwtGuard)
    getUserData(@Request() req) {
        return req.user;
    }
}