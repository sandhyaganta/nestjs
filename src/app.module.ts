import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/company'),
  CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
