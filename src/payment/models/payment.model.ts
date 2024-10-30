import { Table, Column, Model, DataType } from "sequelize-typescript";

interface IpaymentsCreationAttr {
    transaction_id: number;
    amount: number;
    payment_date: number;
    payment_method: string;
}

@Table({
    tableName: "payments",
    timestamps: false, 
})
export class Payment extends Model<Payment, IpaymentsCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    transaction_id!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    amount!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    payment_date!: Date; 

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    payment_method!: string;
}
