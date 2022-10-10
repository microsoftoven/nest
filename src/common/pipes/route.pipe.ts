import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class RoutePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Route pipe');
    return value;
  }
}
