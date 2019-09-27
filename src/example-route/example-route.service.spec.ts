import { Test, TestingModule } from '@nestjs/testing';
import { ExampleRouteService } from './example-route.service';

describe('ExampleRouteService', () => {
  let service: ExampleRouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleRouteService],
    }).compile();

    service = module.get<ExampleRouteService>(ExampleRouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
