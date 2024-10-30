import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {


  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3030


  await app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  });
}
start();
