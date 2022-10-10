import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ModuleBoundMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Module bound middleware');
    next();
  }
}
