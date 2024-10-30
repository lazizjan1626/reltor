import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';
import { SequelizeModule } from "@nestjs/sequelize";
import { ContractsModule } from './contracts/contracts.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      retryAttempts: 5,
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    PaymentModule,
    ContractsModule,
    LocationModule,
  ],
  controllers: [],
  providers: [
    
  ],
})
export class AppModule {}
