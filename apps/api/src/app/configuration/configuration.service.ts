import { Injectable } from '@nestjs/common';
import { Configuration, Param } from '@planout-store/api-interfaces';
import { Experiment } from '../experiment';

@Injectable()
export class ConfigurationService {

  private params: Param[] = [
    {
      param: 'buyCtaColor',
      choices: [
        {
          choice: 'accent',
          weight: 1
        },
        {
          choice: 'primary',
          weight: 1
        },
        {
          choice: 'warn',
          weight: 1
        }
      ]
    },
    {
      param: 'buyCtaText',
      choices: [
        {
          choice: 'BUY NOW',
          weight: 1
        },
        {
          choice: 'GET IT NOW',
          weight: 1
        },
        {
          choice: 'ADD TO CART',
          weight: 1
        }
      ]
    },
    {
      param: 'detailCtaColor',
      choices: [
        {
          choice: 'accent',
          weight: 1
        },
        {
          choice: 'primary',
          weight: 1
        },
        {
          choice: 'warn',
          weight: 1
        }
      ]
    },
    {
      param: 'detailCtaText',
      choices: [
        {
          choice: 'VIEW',
          weight: 1
        },
        {
          choice: 'EXPLORE',
          weight: 1
        },
        {
          choice: 'DETAILS',
          weight: 1
        }
      ]
    },
    {
      param: 'isReviewsPrioritized',
      choices: [
        {
          choice: true,
          weight: 1
        },
        {
          choice: false,
          weight: 1
        }
      ]
    },
    {
      param: 'productHeroImage',
      choices: [
        {
          choice: 'left',
          weight: 1
        },
        {
          choice: 'bottom',
          weight: 1
        },
        {
          choice: 'right',
          weight: 1
        }
      ]
    },
    {
      param: 'productThumbnailImage',
      choices: [
        {
          choice: 'left',
          weight: 1
        },
        {
          choice: 'bottom',
          weight: 1
        },
        {
          choice: 'right',
          weight: 1
        }
      ]
    }
  ];

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

}
