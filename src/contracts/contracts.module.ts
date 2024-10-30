import { Module } from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { ContractsController } from './contracts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contract } from './models/contract.model';

@Module({
  imports: [SequelizeModule.forFeature([Contract])],
  exports: [ContractsService],
  controllers: [ContractsController],
  providers: [ContractsService],
})
export class ContractsModule {}
