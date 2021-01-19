import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Configuration, Product } from '@planout-store/api-interfaces';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Component({
  selector: 'planout-store-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public configuration: undefined | Configuration = undefined;
  public products: Product[] = [];

  public constructor(
    private httpClient: HttpClient,
    private configurationService: ConfigurationService
  ) { }

  public ngOnInit(): void {

    this.configurationService.configuration$.subscribe(

      (configuration: Configuration) => { this.configuration = configuration; }

    );

    this.httpClient.get('http://localhost:3333/api/product/all').subscribe(

      (products: Product[]): void => {

        this.products = products;

      },

      () => { alert('Error fetching data.'); }

    );

  }

}
