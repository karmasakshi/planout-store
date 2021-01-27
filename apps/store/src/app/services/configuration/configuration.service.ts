import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '@planout-store/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public configuration$: BehaviorSubject<Configuration> = new BehaviorSubject({
    buyCtaColor: 'primary',
    buyCtaText: 'BUY NOW',
    detailCtaColor: 'accent',
    detailCtaText: 'DETAILS',
    isReviewsPrioritized: false,
    productHeroImage: 'right',
    productThumbnailImage: 'bottom'
  });

  public constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {

    this.getUserIdAndCallGetConfiguration();

  }

  private getConfiguration(userId: number): void {

    this.httpClient.get('http://localhost:3333/api/configuration/' + userId).subscribe(

      (configuration: Configuration): void => {

        this.configuration$.next(configuration);

      }

    );

  }

  private getUserIdAndCallGetConfiguration(): void {

    this.userService.userId$.subscribe(

      (userId: number): void => {

        this.getConfiguration(userId);

      }

    );

  }

}
