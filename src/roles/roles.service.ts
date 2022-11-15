import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {CreateRoleDto} from "./dto/createRole.dto";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
        const role = await this.roleRepository.create(createRoleDto)
        return role
    }

    async getRoleByValue(value:string): Promise<Role> {
        const role = await this.roleRepository.findOne({where: {value: value}})
        return role
    }
}
