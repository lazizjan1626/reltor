import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './models/payment.model';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment)
    private readonly paymentModel: typeof Payment,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return this.paymentModel.create(createPaymentDto);
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.findAll();
  }

  async findOne(id: number): Promise<Payment | null> {
    return this.paymentModel.findByPk(id);
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<[number, Payment[]]> {
    return this.paymentModel.update(updatePaymentDto, {
      where: { id },
      returning: true, 
    });
  }

  async remove(id: number): Promise<void> {
    const payment = await this.findOne(id);
    if (payment) {
      await payment.destroy();
    }
  }
}
