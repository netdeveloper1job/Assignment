import { Module } from '@nestjs/common';
import { FormConfigService } from './form-config.service';
import { FormConfigController } from './form-config.controller';

@Module({
  controllers: [FormConfigController],
  providers: [FormConfigService],
})
export class FormConfigModule {}
