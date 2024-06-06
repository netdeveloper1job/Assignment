import { Test, TestingModule } from '@nestjs/testing';
import { FormConfigService } from './form-config.service';

describe('FormConfigService', () => {
  let service: FormConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormConfigService],
    }).compile();

    service = module.get<FormConfigService>(FormConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
