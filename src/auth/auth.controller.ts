import {Body, Controller, Post} from '@nestjs/common';
import {LoginUserDto} from "./dto/loginUser.dto";
import {CreateUserDto} from "../users/dto/createUser.dto";
import {User} from "../users/users.model";
import {AuthService} from "./auth.service";
import {UsersService} from "../users/users.service";

@Controller('auth')
export class AuthController {
    constructor(private authRepository: AuthService,
                private userService: UsersService) {
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto): Promise<any> {
        return this.authRepository.login(loginUserDto)
    }

    @Post('registration')
    registration(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.authRepository.registration(createUserDto)
    }
}
