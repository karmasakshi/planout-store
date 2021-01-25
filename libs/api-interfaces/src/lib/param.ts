export interface Param {
  param: string;
  choices: {
    choice: boolean | string;
    weight: number;
  }[];
}
