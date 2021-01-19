import { Module } from '@nestjs/common';
import { ConfigurationController } from './configuration/configuration.controller';
import { ConfigurationService } from './configuration/configuration.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [ConfigurationController, ProductController],
  providers: [ConfigurationService, ProductService]
})
export class AppModule { }
