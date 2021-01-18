import { Injectable } from '@angular/core';
import { Configuration } from '@planout-store/api-interfaces';
import { BehaviorSubject } from 'rxjs';

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
    productHeroImage: 'left',
    productThumbnailImage: 'bottom'
  });

}
