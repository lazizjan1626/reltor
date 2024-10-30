import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Contract } from './models/contract.model';

@Injectable()
export class ContractsService {
  constructor(@InjectModel(Contract) private readonly ContractModel: typeof Contract){}
  
  create(createContractDto: CreateContractDto) {
    console.log('Creating contract with data:', createContractDto); 
    return this.ContractModel.create(createContractDto);
  }
  

  findAll() {
    return this.ContractModel.findAll();
  }

  findOne(id: number) {
    console.log('Finding contract with id:', id); 
    return this.ContractModel.findByPk(id);
  }
  

  update(id: number, updateContractDto: UpdateContractDto) {
    return this.ContractModel.update(updateContractDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.ContractModel.destroy({
      where: { id },
    });
  }
}
