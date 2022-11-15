import {ConflictException, Injectable, UnauthorizedException} from '@nestjs/common';
import {LoginUserDto} from "./dto/loginUser.dto";
import * as bcrypt from "bcrypt";
import {CreateUserDto} from "../users/dto/createUser.dto";
import {User} from "../users/users.model";
import {UsersService} from "../users/users.service";
import {JwtModule, JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService) {}


    async login(loginUserDto: LoginUserDto): Promise<User> {
        const user = await this.validateUser(loginUserDto)
        return this.generateToken(user)
        }


    async registration(createUserDto: CreateUserDto): Promise<User> {
        try {
        const candidate = await this.usersService.getUserByEmail(createUserDto.email)
        if (candidate) {
            throw new ConflictException({message:"User already exists"})
        }
        const saltOrRounds = 6;
        const password = createUserDto.password;
        const hashPassword = await bcrypt.hash(password, saltOrRounds);
        const user = await this.usersService.createUser({email: createUserDto.email, password: hashPassword})
        return user;
        } catch(e) {
            console.log(e)
        }
    }

    async validateUser(loginDto: LoginUserDto) {
        const userValid = await this.usersService.getUserByEmail(loginDto.email)
        const isMatch = await bcrypt.compare(loginDto.password, userValid.password)
        if (userValid && isMatch) {
            return userValid
        }
            throw new UnauthorizedException({message: "Email or password are not correct"})
    }

    async generateToken(user: User): Promise<any> {
        const payload = {
            id: user.id,
            email: user.email,
            roles: user.roles,
        }
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
