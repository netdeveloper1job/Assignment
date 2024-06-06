import { Injectable } from '@nestjs/common';
import { CreateFormConfigDto } from './dto/create-form-config.dto';
import { UpdateFormConfigDto } from './dto/update-form-config.dto';
import { DYNAMICFORMDATA } from 'src/CONSTANTS';

@Injectable()
export class FormConfigService {
  create(createFormConfigDto: CreateFormConfigDto) {
    return 'This action adds a new formConfig';
  }

  findAll() {
    return `This action returns all formConfig`;
  }

  update(id: number, updateFormConfigDto: UpdateFormConfigDto) {
    return `This action updates a #${id} formConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} formConfig`;
  }

  dynamicForm() {
    try {
      let result = DYNAMICFORMDATA;
      return {
        message: 'Get All Dynamic Form Data',
        data: result
      };
    } catch (error) {
      throw error;
    }
  }
}
