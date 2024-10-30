

import { Module } from '@nestjs/common';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ILocationCreateAttr{
    city: string;
    country: string;
    state: string;
    zip_code: string;

}


@Table({
    tableName: 'locations',
    timestamps: false,
})
export class Location extends Model<Location,ILocationCreateAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    city!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    country!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    state!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    zip_code!: string;


}
