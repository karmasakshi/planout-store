export interface Param {
  param: string;
  operation: 'uniform' | 'weighted',
  choices: {
    choice: string;
    weight: number;
  }[];
}
