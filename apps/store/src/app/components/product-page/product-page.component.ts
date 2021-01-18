import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@planout-store/api-interfaces';

@Component({
  selector: 'planout-store-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public heroImgSrc: undefined | string = undefined;
  public product: undefined | Product = undefined;
  public productId: undefined | string = undefined;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  public ngOnInit(): void {

    this.productId = this.activatedRoute.snapshot.params.id;

    this.httpClient.get('http://localhost:3333/api/product/one/' + this.productId).subscribe(

      (product: Product): void => {

        this.product = product;

        this.heroImgSrc = this.product?.imageUrls[0];

      },

      () => { alert('Error fetching data.'); }

    );

  }

}
