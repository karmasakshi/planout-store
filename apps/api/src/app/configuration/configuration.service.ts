import { Injectable } from '@nestjs/common';
import { Configuration, Param } from '@planout-store/api-interfaces';
import { Experiment } from '../experiment';

@Injectable()
export class ConfigurationService {

  private params: Param[] = [];

  get(id: string): Configuration {

    const experiment: Experiment = new Experiment(Number(id), this.params);

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

  set(params: Param[]) {

    this.params = params;

  }

}
