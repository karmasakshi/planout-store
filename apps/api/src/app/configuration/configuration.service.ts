import { Injectable } from '@nestjs/common';
import { Configuration } from '@planout-store/api-interfaces';

@Injectable()
export class ConfigurationService {

  get(id: string): Configuration {

    console.log(id);

    return {
      buyCtaColor: 'primary',
      buyCtaText: 'BUY NOW',
      detailCtaColor: 'accent',
      detailCtaText: 'DETAILS',
      isReviewsPrioritized: false,
      productHeroImage: 'right',
      productThumbnailImage: 'bottom'
    };

  }

}
