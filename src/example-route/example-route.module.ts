// nest g mo example-route

import { Module } from '@nestjs/common';
import { ExampleRouteController } from './example-route.controller';
import { ExampleRouteService } from './example-route.service';

@Module({
  controllers: [ExampleRouteController],
  providers: [ExampleRouteService]
})
export class ExampleRouteModule {}
