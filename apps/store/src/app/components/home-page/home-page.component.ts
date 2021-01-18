import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '@planout-store/api-interfaces';

@Component({
  selector: 'planout-store-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public products: Product[] = [];

  public constructor(
    private httpClient: HttpClient
  ) { }

  public ngOnInit(): void {

    this.httpClient.get('http://localhost:3333/api/product/all').subscribe(

      (products: Product[]): void => {

        this.products = products;

      },

      () => { alert('Error fetching data.'); }

    );

  }

}
