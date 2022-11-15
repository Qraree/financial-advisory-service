import {ConflictException, Injectable} from '@nestjs/common';
import {LoginUserDto} from "../auth/dto/loginUser.dto";
import {CreateUserDto} from "./dto/createUser.dto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import * as bcrypt from 'bcrypt'
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {}


    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.create(createUserDto)
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        return user;
    }

    async getAllUsers (): Promise<User[]> {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users;
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.userRepository.findOne({where: {email: email}})
        return user
    }

    async deleteUserById(id: string): Promise<void> {
        const user = await  this.userRepository.destroy({where: {id: id}})
    }
}
