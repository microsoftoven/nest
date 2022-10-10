import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ModuleBoundMiddleware } from 'src/common/middleware/module-bound.middleware';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleBoundMiddleware).forRoutes('*');
  }
}
