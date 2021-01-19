import { Configuration, ConfigurationOptions } from '@planout-store/api-interfaces';
import * as PlanOut from 'planout';

export class Experiment extends PlanOut.Experiment<number, Configuration> {

  private configurationOptions: undefined | ConfigurationOptions = undefined;

  constructor(userId: number, configurationOptions: ConfigurationOptions) {

    super(userId);

    this.configurationOptions = configurationOptions;

  }

  configureLogger(): void { return; }

  log(log: any): any { console.log(log); }

  previouslyLogged(): boolean { return this._exposureLogged; }

  setup(): any { this.setName('XP'); }

  getParamNames(): any { return this.getDefaultParamNames(); }

  assign(params: any, userId: number): void {

    params.set('buyCtaColor', new PlanOut.Ops.Random.UniformChoice({ choices: this.configurationOptions?.buyCtaColor, unit: userId }));
    params.set('buyCtaText', new PlanOut.Ops.Random.UniformChoice({ choices: this.configurationOptions?.buyCtaText, unit: userId }));
    params.set('detailCtaColor', new PlanOut.Ops.Random.UniformChoice({ choices: this.configurationOptions?.detailCtaColor, unit: userId }));
    params.set('detailCtaText', new PlanOut.Ops.Random.UniformChoice({ choices: this.configurationOptions?.detailCtaText, unit: userId }));
    params.set('isReviewsPrioritized', new PlanOut.Ops.Random.UniformChoice({ choices: this.configurationOptions?.isReviewsPrioritized, unit: userId }));
    params.set('productHeroImage', new PlanOut.Ops.Random.UniformChoice({ choices: this.configurationOptions?.productThumbnailImage, unit: userId }));
    params.set('productThumbnailImage', new PlanOut.Ops.Random.UniformChoice({ choices: this.configurationOptions?.productThumbnailImage, unit: userId }));

  }

}
