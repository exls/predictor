import { IPredictions } from './IPredictions'

export interface IPrediction {
  /**
   * Dot separated path
   *
   * Example:
   *  var inputs = {data: {param: 'value'}}
   *  path = 'data.param'
   *
   */
  readonly path: string
  /**
   * Relations value/formula/source
   */
  readonly sources: string[]
  /**
   * Contains all depdent rules
   */
  readonly depends: IPredictions

  isComputable(inputs: any): boolean
}
