import { CompanyDto } from './dto/company.dto';
import { Model } from 'mongoose';
import { CompanyModule } from './company.module';
import { Injectable } from '@nestjs/common';
import { company } from './schema/company.schema';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class CompanyService {
    constructor(@InjectModel ('company') private companyModel:Model<company>){}
}
