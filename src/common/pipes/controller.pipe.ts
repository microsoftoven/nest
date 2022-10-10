import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ControllerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Controller pipe');
    return value;
  }
}
