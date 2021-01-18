import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from '@planout-store/api-interfaces';

@Injectable()
export class ProductService {

  getAll(): Product[] {

    return [
      {
        name: 'Nike Black Shoe',
        id: 1,
        imageUrls: ['/assets/1-1.jpg', '/assets/1-2.jpg', '/assets/1-3.jpg']
      },
      {
        name: 'Nike White Shoe',
        id: 2,
        imageUrls: ['/assets/2-1.jpg', '/assets/2-2.jpg', '/assets/2-3.jpg']
      }
    ];

  }

  getOne(id: string): Product {

    if (id === '1') {

      return {
        id: 1,
        name: 'Nike Black Shoe',
        imageUrls: ['/assets/1-1.jpg', '/assets/1-2.jpg', '/assets/1-3.jpg']
      };

    } else if (id === '2') {

      return {
        id: 2,
        name: 'Nike White Shoe',
        imageUrls: ['/assets/2-1.jpg', '/assets/2-2.jpg', '/assets/2-3.jpg']
      };

    } else {

      throw new HttpException({
        status: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND);

    }

  }

}
