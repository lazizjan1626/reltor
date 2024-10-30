import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IContractsCreationAttr {
    translation_id: number;
    start_date: Date;  
    end_date: Date;   
    terms: string;
}




@Table({
    tableName: "contracts",
    timestamps: false,

})
export class Contract extends Model<Contract,IContractsCreationAttr> {

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
    translation_id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_date!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    end_date!: Date;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    terms!: string;

}
