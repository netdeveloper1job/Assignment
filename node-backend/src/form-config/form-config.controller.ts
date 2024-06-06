import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormConfigService } from './form-config.service';
import { CreateFormConfigDto } from './dto/create-form-config.dto';
import { UpdateFormConfigDto } from './dto/update-form-config.dto';
import { FormTestRoutes } from './form-config.http.routes';

@Controller('')
export class FormConfigController {
  constructor(private readonly formConfigService: FormConfigService) {}

  @Post()
  create(@Body() createFormConfigDto: CreateFormConfigDto) {
    return this.formConfigService.create(createFormConfigDto);
  }

  @Get()
  findAll() {
    return this.formConfigService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormConfigDto: UpdateFormConfigDto) {
    return this.formConfigService.update(+id, updateFormConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formConfigService.remove(+id);
  }

  
  @Get(FormTestRoutes.dynamic_form)
  dynamicForm() {
    return this.formConfigService.dynamicForm();
  }
}
