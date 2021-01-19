import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Configuration, Product } from '@planout-store/api-interfaces';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Component({
  selector: 'planout-store-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public configuration: undefined | Configuration = undefined;
  public heroImgSrc: undefined | string = undefined;
  public imageUrls: string[] = [];
  public product: undefined | Product = undefined;
  public productId: undefined | string = undefined;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private configurationService: ConfigurationService
  ) { }

  public ngOnInit(): void {

    this.configurationService.configuration$.subscribe(

      (configuration: Configuration) => { this.configuration = configuration; }

    );

    this.productId = this.activatedRoute.snapshot.params.id;

    this.httpClient.get('http://localhost:3333/api/product/one/' + this.productId).subscribe(

      (product: Product): void => {

        this.product = product;

        this.imageUrls = Object.values(this.product.imageUrls);

        this.heroImgSrc = this.product?.imageUrls[this.configuration.productHeroImage];

      },

      () => { alert('Error fetching data.'); }

    );

  }

}
