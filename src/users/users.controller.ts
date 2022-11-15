import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {LoginUserDto} from "../auth/dto/loginUser.dto";
import {CreateUserDto} from "./dto/createUser.dto";
import {User} from "./users.model";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}


    @Get('')
    getALlUsers(): Promise<User[]> {
        return this.userService.getAllUsers()
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): Promise<void> {
        return this.userService.deleteUserById(id)
    }
}
