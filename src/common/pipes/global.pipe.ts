import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class GlobalPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Global pipe');
    return value;
  }
}
