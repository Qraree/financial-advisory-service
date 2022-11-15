import {Column, DataType, Model, Table, HasOne, BelongsTo, ForeignKey, BelongsToMany} from "sequelize-typescript";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/userRoles.model";

interface userCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, userCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.STRING, allowNull: true})
    avatar: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]


}