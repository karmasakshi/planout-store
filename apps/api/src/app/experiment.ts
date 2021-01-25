import { Configuration, Param } from '@planout-store/api-interfaces';
import * as PlanOut from 'planout';

export class Experiment extends PlanOut.Experiment<number, Configuration> {

  private params: Param[] = [];

  constructor(userId: number, params: Param[]) {

    super(userId);

    this.params = params;

  }

  configureLogger(): void { return; }

  log(log: any): any { console.log(log); }

  previouslyLogged(): boolean { return this._exposureLogged; }

  setup(): any { this.setName('XP'); }

  getParamNames(): any { return this.getDefaultParamNames(); }

  assign(planoutParams: any, userId: number): void {

    this.params.forEach((param: Param): void => {

      planoutParams.set(param.param, new PlanOut.Ops.Random.WeightedChoice({ choices: param.choices.map((i) => i.choice), weights: param.choices.map((i) => i.weight), unit: userId }));

    });

  }

}
