import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class RouteParamPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Route param pipe');
    return value;
  }
}
