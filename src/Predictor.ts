import { IPredictions } from "./contracts/IPredictions";
import { IPredictor } from "./contracts/IPredictor";
import { IComputeOptions } from "./contracts/IComputeOptions";

export default class Predictor<T = any> implements IPredictor<T> {
  /**
   * Example:
   *  new Predictor()
   */
  constructor(public readonly predictions: IPredictions = {}) {}
  /**
   * Build
   *    predictor.build({
   *      a: 'b+c',
   *      b: 'a-c',
   *      // has many sources, described as array
   *      c: ['a-b', 'x.y', 'x.z - 2'],
   *      x: {
   *         y: 'c',
   *         z: 'c + 2',
   *      }
   *    })
   */
  async build(sources: any): Promise<IPredictions> {
    return this.predictions;
  }

  /**
   *
   */
  async compute(
    inputs: Partial<T>,
    options: IComputeOptions,
    defaults: any = {}
  ): Promise<T> {
    // trick/hack just to prevent eslinting
    return {} as T;
  }
}
