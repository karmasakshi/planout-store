import { Injectable } from '@angular/core';
import { Configuration } from '@planout-store/api-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public configuration$: BehaviorSubject<Configuration> = new BehaviorSubject({
    ctaColor: 'primary',
    ctaText: 'BUY NOW',
    isReviewsPrioritized: false,
    productHeroImage: 'left',
    productThumbnailImage: 'left'
  });

}
