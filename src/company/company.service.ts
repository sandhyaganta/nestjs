import { CompanyDto } from './dto/company.dto';
import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { company } from './schema/company.schema';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class CompanyService {
    constructor(@InjectModel ('company') private companyModel:Model<company>){}


async create(companyDto: CompanyDto):Promise<company>{
    const company11=new this.companyModel(companyDto);
    return company11.save();

}

async findAll():Promise<company[]>{
    return this.companyModel.find().exec();
}

async findOne(id: string): Promise<company> {
    return this.companyModel.findById(id).exec();
  }

  async update(id: string, bookDto: CompanyDto): Promise<company> {
    return this.companyModel.findByIdAndUpdate(id, bookDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.companyModel.findByIdAndDelete(id).exec();
  }


  
}
