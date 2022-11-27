import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: 'chat'})
export class Chat extends Model<Chat> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: true})
    text: string;

    @Column({type: DataType.STRING, allowNull: true})
    date: Date;



}