import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from '@planout-store/api-interfaces';

@Injectable()
export class ProductService {

  private blackShoe: Product = {
    name: 'Nike Black Shoe',
    id: 1,
    imageUrls: { left: '/assets/1-left.jpg', bottom: '/assets/1-bottom.jpg', right: '/assets/1-right.jpg' }
  };

  private whiteShoe: Product = {
    name: 'Nike White Shoe',
    id: 2,
    imageUrls: { left: '/assets/2-left.jpg', bottom: '/assets/2-bottom.jpg', right: '/assets/2-right.jpg' }
  };

  getAll(): Product[] {

    return [this.blackShoe, this.whiteShoe];

  }

  getOne(id: string): Product {

    if (id === '1') {

      return this.blackShoe;

    } else if (id === '2') {

      return this.whiteShoe;

    } else {

      throw new HttpException({
        status: HttpStatus.NOT_FOUND
      }, HttpStatus.NOT_FOUND);

    }

  }

}
