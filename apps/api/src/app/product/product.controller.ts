
import { Controller, Get, Param } from '@nestjs/common';
import { Product } from '@planout-store/api-interfaces';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService) { }

  @Get('all')
  findAll(): Product[] {
    return this.productService.getAll();
  }

  @Get('one/:id')
  findOne(@Param() params): Product {
    return this.productService.getOne(params.id);
  }

}
