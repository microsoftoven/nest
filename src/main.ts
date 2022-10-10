import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalHTTPExceptionFilter } from './common/filters/exception.filter';
import { GlobalGuard } from './common/guards/global.guard';
import { GlobalInterceptor } from './common/interceptors/global.interceptor';
import { globallyBoundMiddleware } from './common/middleware/globally-bound.middleware';
import { GlobalPipe } from './common/pipes/global.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(globallyBoundMiddleware);
  app.useGlobalGuards(new GlobalGuard());
  app.useGlobalInterceptors(new GlobalInterceptor());
  app.useGlobalPipes(new GlobalPipe());
  app.useGlobalFilters(new GlobalHTTPExceptionFilter());

  await app.listen(3000);
}
bootstrap();
