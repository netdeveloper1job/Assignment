import { Test, TestingModule } from '@nestjs/testing';
import { FormConfigController } from './form-config.controller';
import { FormConfigService } from './form-config.service';

describe('FormConfigController', () => {
  let controller: FormConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormConfigController],
      providers: [FormConfigService],
    }).compile();

    controller = module.get<FormConfigController>(FormConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
