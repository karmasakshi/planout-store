import { Injectable } from '@nestjs/common';
import { Configuration, Param } from '@planout-store/api-interfaces';
import { Experiment } from '../experiment';

@Injectable()
export class ConfigurationService {

  private params: Param[] = [];

  // {
  //   buyCtaColor: ['accent', 'primary', 'warn'],
  //   buyCtaText: ['BUY NOW', 'GET IT NOW', 'ADD TO CART'],
  //   detailCtaColor: ['accent', 'primary', 'warn'],
  //   detailCtaText: ['VIEW', 'EXPLORE', 'DETAILS'],
  //   isReviewsPrioritized: [true, false],
  //   productHeroImage: ['left', 'bottom', 'right'],
  //   productThumbnailImage: ['left', 'bottom', 'right']
  // };

  get(id: string): Configuration {

    const experiment: Experiment = new Experiment('XP', Number(id), this.params);

    return {
      buyCtaColor: experiment.get('buyCtaColor', 'accent'),
      buyCtaText: experiment.get('buyCtaText', 'ADD TO CART'),
      detailCtaColor: experiment.get('detailCtaColor', 'accent'),
      detailCtaText: experiment.get('detailCtaText', 'DETAILS'),
      isReviewsPrioritized: experiment.get('isReviewsPrioritized', true),
      productHeroImage: experiment.get('productHeroImage', 'bottom'),
      productThumbnailImage: experiment.get('productThumbnailImage', 'bottom'),
    };

  }

}
