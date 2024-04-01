import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schema/company.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'company', schema: CompanySchema }])],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}
