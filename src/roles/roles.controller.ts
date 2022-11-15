import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateRoleDto} from "./dto/createRole.dto";
import {Role} from "./roles.model";
import {UsersService} from "../users/users.service";
import {RolesService} from "./roles.service";

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto): Promise<any> {
        return this.roleService.createRole(createRoleDto)
    }

    @Get('/:value')
    getRoleByValue(@Param('value') value: string): Promise<Role> {
        return this.roleService.getRoleByValue(value)
    }
}
