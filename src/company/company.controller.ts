import { Controller, Get,Post,Body ,Param,Put,Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import {company} from './schema/company.schema';


@Controller('company')
export class CompanyController {
    constructor(private readonly companyService:CompanyService){}


    @Post()
    async create(@Body() companyDto:CompanyDto):Promise<company>{
        return this.companyService.create(companyDto)

    }

    @Get()
    async findAll():Promise<company[]>{
        return this.companyService.findAll();
        
    }

    @Get(':id')
  async findOne(@Param('id') id: string): Promise<company> {
    return this.companyService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() bookDto: CompanyDto): Promise<company> {
    return this.companyService.update(id, bookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.companyService.remove(id);
  }

}
