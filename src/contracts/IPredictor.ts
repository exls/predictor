import { IPredictions } from "./IPredictions";
import { IComputeOptions } from "./IComputeOptions";

export interface IPredictor<T = any> {
  readonly predictions: IPredictions;
  build(rules: any): Promise<IPredictions>;
  compute(
    inputs: Partial<T>,
    options: IComputeOptions,
    defaults: Partial<T>
  ): Promise<T>;
}
