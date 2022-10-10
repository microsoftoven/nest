import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll() {
    return [
      {
        id: 1,
        cat: 'some cat breed name',
        name: 'jude',
      },
      {
        id: 2,
        cat: 'some other cat',
        name: 'buddy',
      },
    ];
  }

  findOne(id: string) {
    console.log('Service method');

    return {
      id,
      cat: 'some other cat',
      name: 'buddy',
    };
  }
}
