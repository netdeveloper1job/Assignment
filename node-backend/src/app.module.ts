import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormConfigModule } from './form-config/form-config.module';

@Module({
  imports: [FormConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
