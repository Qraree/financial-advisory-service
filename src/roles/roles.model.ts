import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "./userRoles.model";

interface roleCreationAttrs {
    value: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, roleCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]

}